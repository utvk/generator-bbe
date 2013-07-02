'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [{
    name: 'includeTemplateFile',
    message: 'Would you like to include a template file?',
    default: 'Y/n',
    warning: 'Yes: a template file will be placed into the templates directory.'
  }];

  this.prompt(prompts, function(props) {

    this.includeTemplateFile = (/y/i).test(props.includeTemplateFile);

    cb();
  }.bind(this));
};

ViewGenerator.prototype.files = function files() {
  this.template('_view.js', 'public/js/views/' + this.name + '-view.js');

  if (this.includeTemplateFile) {
    this.write('public/js/templates/' + this.name + '.ejs', '<p>Your content here.</p>\n');
  }
};
