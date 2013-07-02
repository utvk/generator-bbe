define([
  'underscore',
  'backbone'<% if (includeBackboneRelational) { %>,
  'backbone-relational'<% } %>
], function(_, Backbone<% if (includeBackboneRelational) { %>, BackboneRelational<% } %>) {
  'use strict';

  var <%= _.classify(name) %>Model = Backbone.<% if (includeBackboneRelational) { %>Relational<% } %>Model.extend({
    defaults: {

    }<% if (includeBackboneRelational) { %>,

    relations: [{

    }]<% } %>
  });

  return <%= _.classify(name) %>Model;
});
