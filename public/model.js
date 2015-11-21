var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var MemeCollection = require('./collection');
var MemeCollectionView = require('./collectionView');
var HeaderView = require('./headerView');
var FooterView = require('./footerView');
var FormView = require('./formView');
var MemeModel = require('./model');
var MemeView = require('./modelView');
var layoutView = require('./layoutView');


module.exports = Backbone.Model.extend({
  urlRoot: '/getmemes',
  idAttribute: '_id',
  defaults: function() {
    return {
      topText: "generic top text",
      bottomText: "generic bottom text",
      imgURL: "generic url",
      user: "generic author",
      likes: 0
    };
  },
  initialize: function () {
    console.log("meme models being created...");
  }
});
