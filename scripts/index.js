console.log("Developed by Dario Tecchia");

$(document).ready(() => {
  $('.preload').fadeOut();
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

page.base(location.pathname.replace('/', ''));
page('*', init.ctx);
page('/', route.home);
page('/info', route.info);
page('/caffetteria', route.caffetteria);
page('/cocktail', route.cocktail);
page('*', render.content);
page();