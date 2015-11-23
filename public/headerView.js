  var Backbone = require('backbone');
  var $ = require('jquery');
  Backbone.$ = $;
  var _ = require('underscore');
  var tmpl = require('./templates');
  var layoutView = require('./layoutView');

  module.exports = Backbone.View.extend({
  initialize: function () {
    var loggedIn = false;
  },
  template: _.template(tmpl.header),
  events: {
    'click #but1': 'signInHide',
    'click #logmeout': 'logout'
  },
  render: function () {
    var markup = this.template({});
    this.$el.html(markup);
    return this;
  },

  logout:function(e){
    e.preventDefault();
    $.ajax({
      url:'/logout',
      method:'POST',
      success:function(){
        window.location.replace('#');
        loggedIn = false;
        $('.inputForm').removeClass('hidden');
        $('.login').css('margin-top','2.5%');
        $('.headerNav').addClass('hidden');
      },
      failure:function(){

      },
    });
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

          },
          failure:function(){

          }
        });
      },
      failure:function(){

      }
    });
}

});
