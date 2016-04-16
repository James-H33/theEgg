$(document).ready(function() {

  $('.button').on('click', function() {
    $('.button span').toggleClass('sChange');
    $('.nav-wrapper').toggleClass('slideNav');
  })


// WINDOW SCROLL FUNCTIONS
  $(window).on('scroll', function() {
    // Relative scroll position from top of window
    var scrollCheck = $(window).scrollTop();

    if(scrollCheck > $('.items-wrapper').offset().top - ($(window).height() * 1/2)) {
      $('.items-display li').each(function(i) {
          setTimeout(function() {
            $('.items-display li').eq(i).addClass('slideFigures');
          }, 350 * (i + 1));
      })
     }

  }) // Window Scroll END

}) // DOCUMENT END
