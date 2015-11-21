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

  // event:{
  //   $('body').on('click','.loginButton', function(e){
  //     e.preventDefault();
  //     console.log("clicked");
  //     var Ourdata = {
  //       user:$(this).sibglings('input[name="username"]').val(),
  //       pass:$(this).sibglings('input[name="password"]').val(),
  //     };
  //     $.ajax({
  //       url:"/login",
  //       method:"POST",
  //       data:{usernamd: user, password: pass},
  //       success:function(){
  //         console.log("logged in");
  //         $.ajax({
  //           url:"/upload",
  //           method:"GET",
  //           success:function(data){
  //             console.log("we did it"+ data);
  //           },
  //           failure:function(){
  //             console.log("nope!");
  //           }
  //         });
  //       },
  //       failure:function(){
  //         console.log("did not work");
  //       }
  //     });
  //   });
  // }

  // $.ajax({
  //   url:"/upload",
  //   method:"GET",
  //   success:function(data){
  //     console.log("we did it"+ data);
  //   },
  //   failure:function(){
  //     console.log("nope!");
  //   }
  // });


  // var memes = new MemeCollection();
  //
  // memes.fetch().then(function (data) {
  //   var memeView = new MemeCollectionView({collection: memes});
  // });
   new layoutView();

});
