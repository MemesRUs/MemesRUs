var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
// var tmpl = require('./templates');
// var MemeCollection = require('./collection');
// var MemeCollectionView = require('./collectionView');
// var HeaderView = require('./headerView');
// var FooterView = require('./footerView');
// var FormView = require('./formView');
// var MemeModel = require('./model');
// var MemeView = require('./modelView');
var layoutView = require('./layoutView');


$(function () {



  // var memes = new MemeCollection();
  //
  // memes.fetch().then(function (data) {
  //   var memeView = new MemeCollectionView({collection: memes});
  // });
   new layoutView();


});
