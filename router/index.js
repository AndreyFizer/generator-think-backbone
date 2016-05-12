/**
 * Created by andrey on 12.05.16.
 */

var generator  = require('yeoman-generator');
var util       = require('util');
var path       = require('path');

module.exports = Generator;

function Generator() {
    generator.NamedBase.apply(this, arguments);
    var dirPath = '../templates';
    this.sourceRoot(path.join(__dirname, dirPath));
    //this.argument('model', { type: String, required: false });
}

util.inherits(Generator, generator.NamedBase);

Generator.prototype.createViewFiles = function createViewFiles() {
    this.template('router.js', path.join('public/js', this.name + '.js'));
};