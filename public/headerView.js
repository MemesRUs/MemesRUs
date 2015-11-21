var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  //  el: '.login',
  initialize: function () {
    console.log('HELLOOOO');
  },

  template: _.template(tmpl.header),

  events: {
    'click #but1': 'signInHide'
  },

  render: function () {
    var markup = this.template({});
    this.$el.html(markup);
    return this;
  },

  signInHide: function(){
    this.$el.addClass('hidden');
    console.log(this);
  }
});
