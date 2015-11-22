var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var userMemeModel = require('./userMemeModel');

module.exports = Backbone.Collection.extend({
  url: '/get-memes',
  model: userMemeModel,
  initialize: function() {
    console.log("user's memes");
  }
});
