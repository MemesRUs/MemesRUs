var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var userMemeCollection = require('./userMemeCollection');
var userMemeCollectionView = require('./userMemesCollectionView');
var HeaderView = require('./headerView');
var FooterView = require('./footerView');
var FormView = require('./formView');
var userMemesModel = require('./userMemesModel');
var userMemesView = require('./userMemesModelView');
var layoutView = require('./layoutView');

module.exports = Backbone.View.extend({
  el: '.articleMemes',
  events: {
  },
  initialize: function () {
    this.addAll();
  },
  addOne: function (memeModel) {
    var memeView = new userMemesView({model: memeModel});
    this.$el.append(memeView.render().el);
  },
  addAll: function () {
    this.$el.html("");
    _.each(this.collection.models, this.addOne, this);
  }
});
