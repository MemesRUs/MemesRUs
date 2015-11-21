module.exports = {

    header:[

      "<h1 class='title'> Meme or NAh!?...</h1>",
      "<div class='login'>",
      "</div>",
      "<form class='inputForm'>",
      "<input type='text' placeholder='username' name='username' class='loginInput'>",
      "<input type='text' placeholder='password' name='password' class='loginInput'>",
      "<button type='button' name='button' id='but1' class='loginButton'>login</button>",
      "<button type='button' name='button' class='loginButton'>continue as guest</button>",
      "</form>"

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



    form:[

    ].join(''),



    footer:[

    ].join('')



};
