var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var layoutView = require('./layoutView');
var BlankView = require('./blankView');
var BlankModel = require('./blankModel');
var BlankCollection = require('./blankCollection');

module.exports = Backbone.View.extend({
  el: '.containImages',
  events:{

  },
  initialize: function(){
    this.addAll();
  },
  addOne:function(memeModel) {
    var blankView = new BlankView({model: memeModel});
    this.$el.append(blankView.render().el);
  },
  addAll: function(){
    this.$el.html("");
    var newcol = this.collection.toJSON();
    _.each(newcol[0].content, this.addOne, this);
  }

});
