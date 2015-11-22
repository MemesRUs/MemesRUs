var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');


module.exports = Backbone.Model.extend({
  urlRoot: '/create-memes',

  defaults: function() {
    return {
      topText: "generic top text",
      bottomText: "generic bottom text",
      imgURL: "generic url",
    };
  },
  initialize: function () {
    console.log("meme models being created...");
  }
});
