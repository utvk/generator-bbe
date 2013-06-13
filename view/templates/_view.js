define([
  'jquery',
  'underscore',
  'backbone'<% if (includeTemplateFile) { %>,
  'templates'<% } %>
], function ($, _, Backbone, JST) {
  'use strict';

  var <%= _.classify(name) %>View = Backbone.View.extend({
    <% if (includeTemplateFile) { %>template: JST['public/js/templates/<%= name %>.ejs']<% } %>
  });

  return <%= _.classify(name) %>View;
});
