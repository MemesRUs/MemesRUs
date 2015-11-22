var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var FormView = require('./formView');
var layoutView = require('./layoutView');
var MemeCollection = require('./collection');
var MemeCollectionView = require('./collectionView');


module.exports = Backbone.Router.extend({
    routes: {
      '': 'homePage',
      'addMemes': 'addMeme',
      'userMemes': 'userMemes',

    },

    initialize: function(){},

    userMemes:function(){
      $('article').html("");
      //get a view going that loads a collection of get-memes and puts them in the article.

    },

    homePage: function(){
      
       new layoutView();

  },

    addMeme: function(){
      console.log('we clicked this correctly');
        $('article').html("");
        var formView = new FormView();
        $('article').html(formView.render().el);
      console.log('yay you made it!');
    }




});
