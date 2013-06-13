'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var ModelGenerator = module.exports = function ModelGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);

ModelGenerator.prototype.isUsingBackboneRelational = function isUsingBackboneRelational() {
  return (/backbone-relational/).test(this.read(path.join(process.cwd(), 'public/js/main.js')));
};

ModelGenerator.prototype.files = function files() {
  this.includeBackboneRelational = this.isUsingBackboneRelational();

  this.template('_model.js', 'public/js/models/' + this.name + '-model.js');
};
