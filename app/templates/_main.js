'use strict';

require.config({
  shim: {
    'bootstrap': {
      deps: [
        'jquery'
      ],
      exports: 'jquery'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: [
        'jquery',
        'underscore'
      ],
      exports: 'Backbone'
    }<% if (includeBackboneRelational) { %>,
    'backbone-relational': ['backbone']<% } %>
  },
  paths: {
    'jquery': '../components/jquery/jquery',
    'bootstrap': '../components/sass-bootstrap/docs/assets/js/bootstrap',
    'underscore': '../components/underscore/underscore',
    'backbone': '../components/backbone/backbone'<% if (includeBackboneRelational) { %>,
    'backbone-relational': '../components/backbone-relational/backbone-relational'<% } %>
  }
});

require([
  'backbone',
  'bootstrap'
], function(Backbone, Bootstrap) {
  Backbone.history.start();
});
