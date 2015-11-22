var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var MemeCollection = require('./collection');
var HeaderView = require('./headerView');
var FooterView = require('./footerView');
var FormView = require('./formView');
var MemeModel = require('./model');
var MemeView = require('./modelView');
var layoutView = require('./layoutView');

module.exports = Backbone.View.extend({
  // footer navigation

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
    this.$el.find('.login').addClass('hidden');
    console.log(this);
  }
});
