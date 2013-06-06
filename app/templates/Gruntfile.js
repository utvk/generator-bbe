'use strict';

module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'public/js/{,*/}*.js',
        '!public/js/vendor/*'
      ]
    },
    express: {
      options: {
        port: 1337
      },
      dev: {
        options: {
          script: 'app.js'
        }
      }
    },
    watch: {
      express: {
        files: [
          'public/js/{,*/}*.js'
        ],
        tasks: ['express:dev'],
        options: {
          nospawn: true
        }
      },
      livereload: {
        files: [
          'public/*.html',
          'public/css/*.css'
        ],
        options: {
          livereload: true
        }
      }
    },
    requirejs: {
      dist: {
        options: {
          baseUrl: 'public/js',
          optimize: 'none',
          preserveLicenseComments: false,
          useStrict: true,
          wrap: true
        }
      }
    },
    useminPrepare: {
      html: 'public/index.html',
      options: {
        dest: 'dist/public'
      }
    },
    usemin: {
      html: ['dist/{,*/}*.html'],
      css: ['dist/css/{,*/}*.css'],
      options: {
        dirs: ['dist/public']
      }
    },
    cssmin: {
      dist: {
        files: {
          'dist/public/css/main.css': ['public/css/main.css']
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          // removeComments: true,
          // collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: 'public',
          src: '*.html',
          dest: 'dist/public'
        }]
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'public/img',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: 'dist/public/img'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'public',
          src: [
            '*.{ico,txt}',
            'img/{,*/}*.{webp,gif}'
          ],
          dest: 'dist/public'
        }, {
          expand: true,
          src: ['app.js'],
          dest: 'dist'
        }]
      }
    }
  });

  grunt.registerTask('build', [
    'useminPrepare',
    'requirejs',
    'imagemin',
    'htmlmin',
    'concat',
    'cssmin',
    'uglify',
    'copy',
    'usemin'
  ]);

  grunt.registerTask('server', [
    'express:dev',
    'watch'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'build'
  ]);

};
