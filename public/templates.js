module.exports = {

    header:[

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
