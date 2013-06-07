'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');

var CollectionGenerator = module.exports = function CollectionGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(CollectionGenerator, yeoman.generators.NamedBase);

CollectionGenerator.prototype.files = function files() {
  this.template('_collection.js', 'public/js/collections/' + this.name + '-collection.js');
};
