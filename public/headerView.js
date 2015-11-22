  var Backbone = require('backbone');
  var $ = require('jquery');
  Backbone.$ = $;
  var _ = require('underscore');
  var tmpl = require('./templates');

  module.exports = Backbone.View.extend({
  initialize: function () {
    var loggedIn = false;
  },
  template: _.template(tmpl.header),
  events: {
    'click #but1': 'signInHide'
    // 'click #homeTest': 'homeRedirect'
  },
  render: function () {
    var markup = this.template({});
    this.$el.html(markup);
    return this;
  },
  signInHide: function(){
      var that = $('#but1');
      var user = that.siblings('input[name="username"]').val();
      var pass = that.siblings('input[name="password"]').val();

    $.ajax({
      url:"/login",
      method:"POST",
      data: {username:user, password:pass},
      success:function(){
        loggedIn = true;
        $('.inputForm').addClass('hidden');
        $('.login').css('margin-top','1%');
        $('.headerNav').removeClass('hidden');
        $.ajax({
          url:"/get-all-memes",
          method:"GET",
          success:function(data){
            console.log(data);
          },
          failure:function(){
            console.log("nope!");
          }
        });
      },
      failure:function(){
        console.log("did not work");
      }
    });
    console.log(that);
}
// homeRedirect: function() {
//   if(loggedIn === true) {
//     console.log("you're logged in");
//     $('.articleMemes').html(
//     memeCollection.fetch().then(function (){
//       new MemeCollectionView({collection: memeCollection});
//     }));
//   } else {
//     console.log("you're not logged in");
//   }
//  }
});
