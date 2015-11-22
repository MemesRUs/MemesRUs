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
var BlankModel = require('./blankModel');
var BankModelView = require('./blankView');

module.exports = Backbone.Collection.extend({
  url:'/get-blank-memes',
  model: BlankModel,
  initialize: function(){
    console.log("blankMeme");
  }
});
