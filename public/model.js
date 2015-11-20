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
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/memeordeath',
  idAttribute: '_id',
  defaults: function() {
    return {
      topText: "generic top text",
      botText: "generic bottom text",
      image: "generic url",
      author: "generic author",
      likes: 0
    };
  },
  initialize: function () {
    console.log("meme models being created...");
  }
});
