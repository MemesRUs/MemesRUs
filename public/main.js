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


$(function () {
<<<<<<< HEAD
  // new layoutView();


  $('.formSubButton').on('click', function(e){
        e.preventDefault();
        var topText = $(this).siblings('input[name="topText"]').val();
        var botText = $(this).siblings('input[name="botText"]').val();
        var ourIMG = $(this).parent().siblings('.formSampleImg').children('img').attr('src');
        var ourData = {
          imgURL: ourIMG,
          topText:topText,
          bottomText: botText,
          likes: 1,
          user: 'Bob the Builder',
        };

        $.ajax({
          url:'https://tiny-tiny.herokuapp.com/collections/memeordeath',
          method:'POST',
          data: ourData,
          success:function(data){
            console.log("we did this!");
          },
          error:function(){
            console.log("we failed");
          }
        });
        console.log(ourIMG);
  });
=======

  var memes = new MemeCollection();

  memes.fetch().then(function (data) {
    var memeView = new MemeCollectionView({collection: memes});
  });
  // new layoutView();
>>>>>>> d5528679a331fd14fa6fa51be1976e7c78b8d4de
});
