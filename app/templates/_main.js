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
    }<% if (includeBackboneRelational) { %>,
    'backbone-relational': ['backbone']<% } %>
  },
  paths: {
    'jquery': '../components/jquery/jquery',
    'backbone': '../components/backbone-amd/backbone',
    'underscore': '../components/underscore-amd/underscore'<% if (includeBackboneRelational) { %>,
    'backbone-relational': '../components/backbone-relational/backbone-relational'<% } %>
  }
});

require([
  'backbone'
], function (Backbone) {
  Backbone.history.start();
});
