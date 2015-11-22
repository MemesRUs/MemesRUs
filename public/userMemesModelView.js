var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'memeListing',
  template: _.template(tmpl.memes),
  events: {
    'click span': 'likeMeme'
  },
  likeMeme: function () {
    console.log(this);
    var currLikes = this.model.attributes.likes;
    this.model.set({likes: currLikes+1});
    this.$el.find('#likeCount').html(currLikes+1);
    this.model.save();
  },
  initialize: function () {

  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
