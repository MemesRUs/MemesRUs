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
var blankModel = require('./blankModel');



module.exports = Backbone.View.extend({
  tagName: 'li',
  className: 'col-md-4 eachimg',
  template: _.template(tmpl.plainIMG),
  initialize:function(){},

  events: {

  },

  selectedMeme:function(){},

  render:function(){
    var markup = this.template(this.model);
    this.$el.html(markup);
    return this;
  }







});
