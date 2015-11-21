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

module.exports = Backbone.View.extend({
  el: '.articleMemes',
  events: {
  },
  initialize: function () {
    this.addAll();
  },
  addOne: function (memeModel) {
    var memeView = new MemeView({model: memeModel});
    this.$el.append(memeView.render().el);
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  }
});
