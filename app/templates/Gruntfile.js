'use strict';

module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['public/js/{,*/}*.js'],
        dest: 'dist/main.js'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'public/js/{,*/}*.js',
        '!public/js/vendor/*'
      ]
    }
  });

  grunt.registerTask('default', [
    'jshint',
    'concat'
  ]);

};
