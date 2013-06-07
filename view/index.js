'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.files = function files() {
  this.template('_view.js', 'public/js/views/' + this.name + '-view.js');
  this.write('public/js/templates/' + this.name + '.ejs', '<p>Your content here.</p>\n');
};
