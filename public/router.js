var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var FormView = require('./FormView');
var layoutView = require('./layoutView');

module.exports = Backbone.Router.extend({
    routes: {
      '': 'homePage',
      'addMemes': 'addMeme',

    },

    initialize: function(){},

    homePage: function(){
      console.log('home');
    },

    addMeme: function(){
      // var blankColl = new Collection();
      // blankColl.fetch().then(function(){
      //   var newFrom = new FormView();
      //   $
      console.log('yay you made it!');
    }




});
