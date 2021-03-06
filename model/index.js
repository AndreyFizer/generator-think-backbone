// Created by andrey on 12.05.16.

"use strict";

var generator  = require('yeoman-generator');
var util       = require('util');
var path       = require('path');

module.exports = Generator;

function Generator() {
    generator.NamedBase.apply(this, arguments);
    var dirPath = '../templates';
    this.sourceRoot(path.join(__dirname, dirPath));
}

util.inherits(Generator, generator.NamedBase);

Generator.prototype.createModelFiles = function createModelFiles() {
    this.template('model.js', path.join('public/js/models', this.name + '.js'));
};