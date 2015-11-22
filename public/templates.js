module.exports = {

    header:[

             "<h1 class='title'> Meme or Die!!?...</h1>",
             "<img src='http://st.depositphotos.com/1742172/2154/v/950/depositphotos_21546969-Cartoon-scary-ghost.jpg' />",
             "<div class='login'>",
             "</div>",
             "<form class='inputForm'>",
             "<input type='text' placeholder='username' name='username' class='loginInput'>",
             "<input type='text' placeholder='password' name='password' class='loginInput'>",
             "<button type='button' name='button' id='but1' class='loginButton'>login</button>",
             "<button type='button' name='button' class='loginButton'>continue as guest</button>",
             "</form>",

             "<div class='headerDiv'> <img src='icons/home.jpg' class='divIcon1'/></div>",
             "<div class='headerDiv'><img src='icons/add64.png'/ class='divIcon2'> </div>"

    ].join(''),

    memes:[
      '<div class="imgHolder">',
      '<img class="mainImg" src="<%= imgURL %>"',
      '<br>',
      '<ul class="memeUL">',
      '<li> <img class="iconHeart" src="heart.svg"/><%= likes %> </li>',
      '<li> <span><img class="iconHeart" src="heart-outlined.svg"/> like it </li></span>',
      '<li><b><%= user %></b></li>',
      '</ul>',
      '</div>',
      '<h4 class="topLayer"> <%= topText %> </h4>',
      '<h4 class="bottomLayer"> <%= botText %> </h4>'
    ].join(''),



    form:[

    ].join(''),



    footer:[


    ].join('')



};
