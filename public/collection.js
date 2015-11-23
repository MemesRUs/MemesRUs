var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var MemeModel = require('./model');

module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/memeordeath',
  model: MemeModel,
  initialize: function() {
    
  }
});
