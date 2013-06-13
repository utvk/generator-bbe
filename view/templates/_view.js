define([
  'jquery',
  'underscore',
  'backbone',
  'templates'
], function ($, _, Backbone, JST) {
  'use strict';

  var <%= _.classify(name) %>View = Backbone.View.extend({
    template: JST['public/js/templates/<%= name %>.ejs']
  });

  return <%= _.classify(name) %>View;
});
