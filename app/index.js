'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var Generator = module.exports = function Generator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.testFramework = this.options['test-framework'] || 'mocha';
  this.hookFor(this.testFramework, { as: 'app' });

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });
};

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.askFor = function askFor() {
  var cb = this.async();

  console.log(this.yeoman);

  var prompts = [{
    name: 'expressFileName',
    message: 'What would you like to name your main express file?',
    'default': 'app or server'
  }, {
    name: 'includeBackboneRelational',
    message: 'Would you like to include Backbone-Relational?',
    default: 'Y/n',
    warning: 'Yes: Backbone-Relational will be placed into the bower components directory.'
  }];

  this.prompt(prompts, function (err, props) {
    if (err) {
      return this.emit('error', err);
    }

    this.expressFileName = props.expressFileName;
    this.includeBackboneRelational = (/y/i).test(props.includeBackboneRelational);

    cb();
  }.bind(this));
};

Generator.prototype.git = function git() {
  this.copy('gitignore', '.gitignore');
};

Generator.prototype.bower = function bower() {
  this.copy('bowerrc', '.bowerrc');
  this.template('_bower.json', 'bower.json');
};

Generator.prototype.jshint = function jshint() {
  this.copy('jshintrc', '.jshintrc');
};

Generator.prototype.editorConfig = function editorConfig() {
  this.copy('editorconfig', '.editorconfig');
};

Generator.prototype.grunt = function grunt() {
  this.template('_Gruntfile.js', 'Gruntfile.js');
};

Generator.prototype.packageJSON = function packageJSON() {
  this.template('_package.json', 'package.json');
};

Generator.prototype.scaffolding = function scaffolding() {
  this.mkdir('public');
  this.mkdir('public/img');
  this.copy('app.js', this.expressFileName + '.js');
};

Generator.prototype.baseFiles = function baseFiles() {
  this.template('_index.html', 'public/index.html');
  this.template('_main.js', 'public/js/main.js');
  this.write('public/sass/main.scss', '@import "components/sass-bootstrap/lib/bootstrap";\n\n.hero-unit {\n  margin: 50px auto 0;\n  width: 300px;\n}\n');
};
