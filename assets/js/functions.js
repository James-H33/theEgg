$(document).ready(function() {

  $('.button').on('click', function() {
    $('.button span').toggleClass('sChange');
    $('.nav-wrapper').toggleClass('slideNav');
  })


// WINDOW SCROLL FUNCTIONS
  $(window).on('scroll', function() {
    // Relative scroll position from top of window
    var scrollCheck = $(window).scrollTop();
    var windowTop = $(window).height() * 1/2;

    if(scrollCheck > $('.items-wrapper').offset().top - windowTop) {
      $('.items-display li').each(function(i) {
          setTimeout(function() {
            $('.items-display li').eq(i).addClass('slideFigures');
          }, 350 * (i + 1));
      })
     }

     if(scrollCheck > $('.about-wrapper').offset().top - windowTop - 200) {
       $('.about-wrapper').addClass('aboutUp');
     }

     $('.intro-display').css({
       'transform' : 'translateY(0' + scrollCheck * 0.05 + '%)'
     })

  }) // Window Scroll END

}) // DOCUMENT END
