'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');

var RouterGenerator = module.exports = function RouterGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(RouterGenerator, yeoman.generators.NamedBase);

RouterGenerator.prototype.files = function files() {
  this.template('_router.js', 'public/js/routes/' + this.name + '-router.js');
};
