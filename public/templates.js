module.exports = {

    header:[

             "<h1 class='title'> Meme or Die</h1>",
             "<div class='login'>",
             "<form class='inputForm'>",
             "<input type='text' placeholder='username' name='username' class='loginInput'>",
             "<input type='password' placeholder='password' name='password' class='loginInput'>",
             "<button type='button' name='button' id='but1' class='loginButton'>login</button>",
             "<button type='button' name='button' id='but2' class='loginButton'>continue as guest</button>",
             "</form>",
             "<ul class='headerNav hidden'>",
             "<li><a href='#'><img class='headerIcon' src='icons/home.svg'/><br> HOME</a></li> ",
             "<li><a href='#userMemes'><img class='headerIcon' src='icons/folder.svg'/><br> COLLECTION</a></li> ",
             "<li><a href='#addMemes'><img class='headerIcon' src='icons/plus.svg'/><br>CREATE</a></li>",
             "<li><a href='/logout'><img class='headerIcon' src='icons/log-out.svg'/><br>LOG OUT</a></li>",
             "</ul>",
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
      '<div class="imgHolder" id="prevImg">',
      '<h4 class="topLayer" id="topTexts"> topText</h4>',
      '<h4 class="bottomLayer" id="bottomTexts"> bottomText</h4>',
      '</div>',
      '<ul class="memeUL">',
      '<li> <img class="iconHeart" src="heart.svg"/> <span id="likeCount"></span> </li>',
      '<li> <span id="liker"><img class="iconHeart" src="heart-outlined.svg"/></li></span>',
      '<li> <img class="iconUser" src="user.svg"/> <b></b></li>',
      '</ul>',
      '</div>',
      '</div>',
      '<article class="createAMeme col-md-6">',
      '<h1 style="text-align:center">Select your base meme!</h1>',
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
      '<button type="submit" class="formSubButton" value="Submit" name="Submit">Submit</button>',
      '<button type="preview" class="previewMeme" value="preview" name="preview">Preview</button>',
      '</div>',
      '</form>',
      '</aside>'
    ].join(''),

    plainIMG:[

      '<a href="#"><img class="thumb" src="<%=generatedName%>" alt=""></a>',


    ].join(''),




    footer:[
      '<ul id="footerNav">',
      '<li><img class="footerIcon" src="icons/facebook-with-circle.svg"/></li>',
      '<li><img class="footerIcon" src="icons/twitter-with-circle.svg"/></li>',
      '<li><img class="footerIcon" src="icons/pinterest-with-circle.svg"/></li>',
      '</ul>',
      '&copy; Meme or Die 2015<br>',
      '<a href="http://www.entypo.com">Entypo</a> pictograms by Daniel Bruce<br>',
    ].join('')



};
