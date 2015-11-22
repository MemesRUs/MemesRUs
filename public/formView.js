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

  initialize:function(){

  },

  template: _.template(tmpl.formPage),

  render:function(){
    ourHTML = this.template(this.model);
    this.$el.html(ourHTML);
    return this;
  }



});


//
//  this is incase we need to upload info to tiny tiny for testing use


// <div class="formContainer">
//     <div class="formSampleImg">
//
//         <form action="" class="formGenerate">
//           <div class="col-md 8">
//             <img class="formImage" src="http://brammoforum.com/index.php?action=media;sa=media;in=349;preview" alt="">
//             <input type="text" name="topText" class="formTopText" placeholder="top text">
//             <input type="text" name="botText" class="formBottomText" placeholder="bottom text">
//             <input type="submit" class="formSubButton" value="Submit" name="Submit">
//           </div>
//
//
//
//
//         </form>
//     </div>
//
// </div>

// this is the ajax call to post the above information form to tiny tiny for testing


// $('body').on('click','.formSubButton', function(e){
//     e.preventDefault();
//     console.log("we did it");
//     var that=$(this);
//     console.log(that);
//     var ourData ={
//       imgURL: that.siblings('img').attr('src'),
//       topText: that.siblings('input[name="topText"]').val(),
//       bottomText: that.siblings('input[name="botText"]').val(),
//       likes:1,
//       user:"superman",
//     };
//     $.ajax({
//       url:"https://tiny-tiny.herokuapp.com/collections/memeordeath",
//       method:"POST",
//       data: ourData,
//       success:function(data){
//         console.log("we did it!");
//       },
//       failure:function(){
//         console.log("not so much");
//       }
//     });
// });
