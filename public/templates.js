module.exports = {

    header:[

             "<h1 class='title'> Meme or Die!!?...</h1>",
             "<div class='login'>",
             "<form class='inputForm'>",
             "<input type='text' placeholder='username' name='username' class='loginInput'>",
             "<input type='password' placeholder='password' name='password' class='loginInput'>",
             "<button type='button' name='button' id='but1' class='loginButton'>login</button>",
             "<button type='button' name='button' id='but2' class='loginButton'>continue as guest</button>",
             "</form>",
             "<img class='hidden headerIcon' src='icons/home.svg'/>",
             "<img class='hidden headerIcon' src='icons/plus.svg'/>",
             "</div>"


    ].join(''),

    memes:[
      '<div class="imgHolder" style="background-image:url(<%= imgURL %>)">',
      '<h4 class="topLayer"> <%= topText %> </h4>',
      '<h4 class="bottomLayer"> <%= bottomText %> </h4>',
      '</div>',
      '<ul class="memeUL">',
      '<li> <img class="iconHeart" src="heart.svg"/> <span id="likeCount"><%= likes %></span> </li>',
      '<li> <span id="liker"><img class="iconHeart" src="heart-outlined.svg"/> like it </li></span>',
      '<li> <img class="iconUser" src="user.svg"/> <b><%= user %></b></li>',
      '</ul>'
    ].join(''),



    formPage:[
      '<div class="memeListing sampleList">',
      '<a href="#">home</a>',
      '<div class="imgHolder" style="background-image:url()">',
      '<h4 class="topLayer"> topText</h4>',
      '<h4 class="bottomLayer"> bottomText</h4>',
      '</div>',
      '<ul class="memeUL">',
      '<li> <img class="iconHeart" src="heart.svg"/> <span id="likeCount"></span> </li>',
      '<li> <span id="liker"><img class="iconHeart" src="heart-outlined.svg"/></li></span>',
      '<li> <img class="iconUser" src="user.svg"/> <b></b></li>',
      '</ul>',
      '</div>',
      '</div>',
      '<article class="createAMeme col-md-6">',
      '<h1 style="text-align:center">select your base meme!</h1>',
      '<ul class="col-md-12 containImages">',
      '</ul>',
      '</article>',
      '<aside class="col-md-6 newMemeForm">',
      '<form action="" class="formGenerate">',
      '<h1 style="text-align:center">Create your Own Meme</h1>',
      '<div class="col-md 8">',
      '<input type="text" name="topText" class="formTopText" maxlength="65" autocomplete="off" placeholder="top text">',
      '<input type="text" name="botText" class="formBottomText" maxlength="65" autocomplete="off" placeholder="bottom text">',
      '</div>',
      '<div class="formbutton">',
      '<button type="submit" class="btn btn-primary formSubButton" value="Submit" name="Submit">Submit</button>',
      '<button type="preview" class="btn btn-primary previewMeme" value="preview" name="preview">Preview</button>',
      '</div>',
      '</form>',
      '<div class="upload">',
      '<h4>or upload your own image</h4>',
      '<form action="/upload" method="Post" enctype="multipart/form-data" class="uploadImg">',
      '<label class="control-label">Select File</label>',
      '<input id="input-1" type="file" class="file">',
      '<button type="submit" class="newImgSubBut">Upload</button>',
      '</form>',
      '</div>',
      '</aside>'
    ].join(''),

    plainIMG:[
      '<li class="col-md-4 eachimg">',
      '<a href="#"><img class="thumb" src="<%=%>" alt=""></a>',
      '</li>',

    ].join(''),




    footer:[
      '<ul id="footerNav">',
      '<li><img class="footerIcon" src="icons/facebook-with-circle.svg"/></li>',
      '<li><img class="footerIcon" src="icons/twitter-with-circle.svg"/></li>',
      '<li><img class="footerIcon" src="icons/pinterest-with-circle.svg"/></li>',
      '</ul>',
      '&copy; Memes or Death Co. 2015<br>',
      '<a href="http://www.entypo.com">Entypo</a> pictograms by Daniel Bruce<br>',
    ].join('')



};
