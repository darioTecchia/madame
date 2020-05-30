import Router from "./lib/router.js";

console.log("Developed by Dario Tecchia");

$(document).ready(()=> {
  $('.preload').fadeOut();
});

const router = new Router({
  mode: 'history',
  root: '/'
});

if (!mobileCheck()) {
  $('header .menu').hover(
    (eIn) => {
      $('header .menu-button').addClass('hide');
      $('header .menu .menu-options').removeClass('hide');
    },
    (eOut) => {
      $('header .menu-button').removeClass('hide');
      $('header .menu .menu-options').addClass('hide');
    });
} else {
  $(window).click(function () {
    $('header .menu .menu-options').addClass('hide');
  });
  $('header .menu').click((e) => {
    e.stopPropagation();
    $('header .menu .menu-options').toggleClass('hide');
  });

}

router
  .add(/^caffetteria$/, 'caffetteria', () => {
    console.log('caffetteria controller');

  })
  .add(/^cocktail$/, 'cocktail', () => {
    console.log('cocktail controller');

  })
  .add(/^info$/, 'info', () => {
    console.log('info controller');

  })
  .add(/./, () => {
    console.log("else controller");
    router.navigate('/');
  })
  .add('', 'home', () => {
    // general controller
    console.log('home controller');
  });