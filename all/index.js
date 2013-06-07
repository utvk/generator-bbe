'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var Generator = module.exports = function Generator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  args = this.name;

  this.hookFor('bbe:model', {
    args: args
  });

  this.hookFor('bbe:collection', {
    args: args
  });

  this.hookFor('bbe:view', {
    args: args
  });

  this.hookFor('bbe:router', {
    args: args
  });
};

util.inherits(Generator, yeoman.generators.Base);
