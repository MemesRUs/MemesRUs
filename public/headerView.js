  var Backbone = require('backbone');
  var $ = require('jquery');
  Backbone.$ = $;
  var _ = require('underscore');
  var tmpl = require('./templates');

  module.exports = Backbone.View.extend({
    //  el: '.login',



  initialize: function () {

  },

  template: _.template(tmpl.header),

  events: {
    'click #but1': 'signInHide',
    'click .loginButton': 'continueLogin'
  },

  render: function () {
    var markup = this.template({});
    this.$el.html(markup);
    return this;
  },

  signInHide: function(){

    // this.$el.find('.login').addClass('hidden');
    //
    //
    // console.log(this);



    // this.$el.addClass('hidden');
      var that = $('#but1');
      var user = that.siblings('input[name="username"]').val();
      var pass = that.siblings('input[name="password"]').val();


    $.ajax({
      url:"/login",
      method:"POST",
      data: {username:user, password:pass},
      success:function(){
        console.log("logged in");
        $.ajax({
          url:"/get-memes",
          method:"GET",
          success:function(data){

          console.log( data);
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
});
