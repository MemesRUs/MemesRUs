module.exports = {

    header:[

            // <h1 class="title"> Meme or NAh!?...</h1>
            // <div class="login">
            // </div>
            // <form class='inputForm'>
            // <input type='text' placeholder='username' name='username' class="loginInput">
            // <input type='text' placeholder='password' name='password' class="loginInput">
            // <button type="button" name="button">login</button class='loginButton'>
            // <button type="button" name="button">continue as guest</button class='loginButton'>
            // </form>

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
