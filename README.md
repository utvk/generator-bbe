# Backbone/Express generator
[![Build Status](https://secure.travis-ci.org/nathanstaines/generator-bbe.png?branch=master)](https://travis-ci.org/nathanstaines/generator-bbe)

A generator for Yeoman. Out of the box it includes jQuery, Underscore.js, Backbone.js, RequireJS, Express, Twitter Bootstrap for Sass and Modernizr.

Optional BackboneRelational support has been added as a prompt when using the generator on new projects.

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
  `npm install -g yo`
- Install the generator: `npm install -g generator-bbe`
- Run: `yo bbe`

## Sub-generators
- bbe:model
- bbe:view
- bbe:collection
- bbe:router
- bbe:all

## Options
* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after
  scaffolding has finished.

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
