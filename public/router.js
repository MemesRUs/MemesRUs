var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var FormView = require('./formView');
var layoutView = require('./layoutView');
var MemeCollection = require('./collection');
var MemeCollectionView = require('./collectionView');
var BlankCollection = require('./blankCollection');
var BlankColView = require('./blankColView');

module.exports = Backbone.Router.extend({
    routes: {
      '': 'homePage',
      'addMemes': 'addMeme',
      'userMemes': 'userMemes',
      'logout': 'loggedout',

    },

    initialize: function(){},

    loggedout:function(){
      window.location.replace('/logout');

      window.location.replace('#').then(function(e){
        e.preventDefault();
        new layoutView();
      });
    },

    userMemes:function(){
      $('article').html("");
      //get a view going that loads a collection of get-memes and puts them in the article.

    },

    homePage: function(){

      var memeCollection = new MemeCollection();
      memeCollection.fetch().then(function (){
        new MemeCollectionView({collection: memeCollection});
      });

  },

    addMeme: function(){
      var self =this;
      $('article').html("");
      var formView = new FormView();
      var blankCollection = new BlankCollection();
      blankCollection.fetch().then(function(){
        $('article').html(formView.render().el);
        new BlankColView({collection: blankCollection});
      });


    }




});
