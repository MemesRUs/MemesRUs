var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
// var MemeCollection = require('./collection');
// var MemeCollectionView = require('./collectionView');
// var HeaderView = require('./headerView');
// var FooterView = require('./footerView');
// var FormView = require('./formView');
// var MemeModel = require('./model');
// var MemeView = require('./modelView');
// var layoutView = require('./layoutView');

module.exports = Backbone.View.extend({
  tagName: 'div',
  className: 'memeListing',
  template: _.template(tmpl.memes),
  events: {
    'click span': 'likeMeme'
  },
  likeMeme: function () {
    var currLikes = this.model.attributes.popularityRating;
    this.model.set({popularityRating: currLikes+1});
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
