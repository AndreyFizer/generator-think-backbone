/**
 * Created by andrey on 12.05.16.
 */

"use strict";

var generator  = require('yeoman-generator');
var util       = require('util');
var path       = require('path');

module.exports = Generator;

function Generator() {
    generator.NamedBase.apply(this, arguments);
    var dirPath = '../templates';
    this.sourceRoot(path.join(__dirname, dirPath));
    //this.option('coffee', { desc: 'CoffeeScript instead standard JavaScript' });
}

util.inherits(Generator, generator.NamedBase);

Generator.prototype.createModelFiles = function createModelFiles() {
    var ext = 'js';
    this.template('model.' + ext, path.join('public/js/models', this.name + '.' + ext));
};