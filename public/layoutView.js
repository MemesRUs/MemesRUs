var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var MemeCollection = require('./collection');
var MemeCollectionView = require('./collectionView');
var HeaderView = require('./headerView');

module.exports = Backbone.View.extend({
   el: '#layout',

   initialize: function(){
     var self = this;
     var headerHTML = new HeaderView();
     var memeCollection = new MemeCollection();
     memeCollection.fetch().then(function (){
       self.$el.find('header').html(headerHTML.render().el);
       new MemeCollectionView({collection: memeCollection});
     });
   },
 });
