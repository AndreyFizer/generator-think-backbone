// Created by andrey on 12.05.16.

'use strict';

var util = require('util');
var path = require('path');
var spawn = require('child_process').spawn;
var yeoman = require('yeoman-generator');
var _ = require('underscore.string');

var AppGenerator = module.exports = function Appgenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);
    
    //this.testFramework = this.options['test-framework'] || 'mocha';
    this.templateFramework = this.options['template-framework'] || 'lodash';
    
    this.indexFile = this.readFileAsString(path.join(this.sourceRoot(), 'index.html'));
    this.mainJsFile = this.readFileAsString(path.join(this.sourceRoot(), 'main.js'));
    
    this.on('end', function () {
        this.installDependencies({
            skipInstall: options['skip-install'],
            skipMessage: options['skip-install-message']
        });
    });
    
    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(AppGenerator, yeoman.generators.Base);

AppGenerator.prototype.askFor = function () {
    var cb = this.async();
    
    console.log(this.yeoman);
    console.log('<<< Backbone.js >>>');
    
    var prompts = [{
        type   : 'list',
        name   : 'bootstrapFlavor',
        message: 'Would you like to include Bootstrap?',
        choices: [
            // {'name':'yes, for Sass', value:'sass'},
            // {'name':'yes, for Less', value:'less'},
            {'name': 'no, without Bootstrap', value: 'none'}
        ],
        default: 'sass'
    },
        {
            type   : 'checkbox',
            name   : 'features',
            message: 'What more would you like?',
            choices: [{
                name   : 'RequireJS',
                value  : 'includeRequireJS',
                checked: true
            }]
        }];
    
    this.prompt(prompts, function (answers) {
        var features = answers.features;
        
        function hasFeature(feat) {
            return features.indexOf(feat) !== -1;
        }
        
        this.bootstrapFlavor = answers.bootstrapFlavor;
        this.includeRequireJS = hasFeature('includeRequireJS');
        
        cb();
    }.bind(this));
};

AppGenerator.prototype.genPackageJson = function packageJSON() {
    this.template('_package.json', 'package.json');
};

AppGenerator.prototype.genGitIgnore = function git() {
    this.copy('gitignore', '.gitignore');
};

AppGenerator.prototype.genBowerJson = function () {
    this.copy('bowerrc', '.bowerrc');
    this.copy('_bower.json', 'bower.json');
};

AppGenerator.prototype.genStyle = function mainStylesheet() {
    this.copy('main.css', 'public/styles/main.css');
};

AppGenerator.prototype.genApp = function mainStylesheet() {
    this.copy('_app.js', 'public/app.js');
};

AppGenerator.prototype.writeIndexWithRequirejs = function writeIndexWithRequirejs() {
    if (!this.includeRequireJS) {
        return;
    }
    
    this.indexFile = this.readFileAsString(path.join(this.sourceRoot(), 'index.html'));
    this.indexFile = this.engine(this.indexFile, this);
    
    this.indexFile = this.appendScripts(this.indexFile, 'js/main.js', ['js/libs/requirejs/require.js'], {'data-main': 'js/main'});
};

AppGenerator.prototype.app = function app() {
    this.mkdir('public');
    this.mkdir('public/js');
    this.mkdir('public/styles');
    this.mkdir('public/images');
    this.write('public/index.html', this.indexFile);
};

AppGenerator.prototype.mainJS = function mainJS() {
    if (!this.includeRequireJS) {
        return;
    }
    var dirPath = '../templates';
    this.sourceRoot(path.join(__dirname, dirPath));
    
    var mainJsFile = this.engine(this.read('requirejs_app.js'), this);
    
    this.write('public/js/main.js', mainJsFile);
};
