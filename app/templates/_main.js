'use strict';

require.config({
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    }<% if (includeBackboneRelational) { %>,
    'backbone-relational': ['backbone']<% } %>
  },
  paths: {
    'jquery': '../components/jquery/jquery',<% if (includeBackboneRelational) { %>
    'backbone': '../components/backbone/backbone',
    'underscore': '../components/underscore/underscore',
    'backbone-relational': '../components/backbone-relational/backbone-relational'<% }else{ %>
    'backbone': '../components/backbone-amd/backbone',
    'underscore': '../components/underscore-amd/underscore'<% } %>,
    'bootstrap': '../components/sass-bootstrap/docs/assets/js/bootstrap'
  }
});

require([
  'backbone',
  'bootstrap'
], function(Backbone) {
  Backbone.history.start();
});
