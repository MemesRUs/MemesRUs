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

  className:'container sampleMeme',

  events:{
    'click .formSubButton': 'newMeme',
    'click .thumb': 'chosen',
    'click .previewMeme': 'preview',

  },

  preview: function(e){
    e.preventDefault();
    var prevIMG = this.$el.find('.chosenOne').attr('src');
    this.$el.find('#prevImg').css('background-image','url("'+this.$el.find('.chosenOne').attr('src')+'")');
    this.$el.find('#topTexts').html(this.$el.find('input[name="topText"]').val());
    this.$el.find('#bottomTexts').html(this.$el.find('input[name="botText"]').val());


  },


  chosen: function(e){
    e.preventDefault();
    this.$el.find('.thumb').removeClass('chosenOne');
    $(e.target).addClass('chosenOne');
  },


  newMeme: function(e){
    e.preventDefault();

    var ourData ={
          originalName: this.$el.find('.chosenOne').attr('src'),
          topText: this.$el.find('input[name="topText"]').val(),
          bottomText: this.$el.find('input[name="botText"]').val(),
          popularityRating: 0
        };
        this.$el.find('input').val('');
        this.model.set(ourData);
        this.model.save();
  },

  initialize:function(){
    if(!this.model){
      this.model = new MemeModel();
    }
  },

  template: _.template(tmpl.formPage),

  render:function(){
    ourHTML = this.template(this.model);
    this.$el.html(ourHTML);
    return this;
  }



});
