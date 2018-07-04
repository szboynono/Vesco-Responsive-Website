

$(
function handleOutboundLinkClicks(event) {
  console.log('clicked');
  ga('send', 'event', {
    eventCategory: 'Outbound Link',
    eventAction: 'click',
    eventLabel: event.target.href
  });
}
);

/* ===============
    Services
==============*/
$(() => {
  //animate on scroll
  new WOW().init();
});

/* ===============
    WORK
==============*/
$(() => {
  $("#work").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }
    // other options
  });
});

/* ===============
    TEAM
==============*/
$(function() {
  $('#team-members').owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      }
    }
  });
});

/* ===============
    Testimonails
==============*/
$(function() {
  $('#customers-testimonials').owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});

/* ===============
    STATS
==============*/
$(function() {
  $('.counter').counterUp({
    delay: 10,
    time: 1800
  });
});

/* ===============
    Clients
==============*/
$(function() {
  $('#clients-list').owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 3
      },
      768: {
        items: 5
      },
      992: {
        items: 6
      }
    }
  });
});

/* ===============
    Navigation
==============*/
$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() < 50) {
      //hide nav
      $('nav').removeClass('vesco-top-nav');
      $('#back-to-top').fadeOut();
    } else {
      //show nav
      $('nav').addClass('vesco-top-nav');
      $('#back-to-top').fadeIn();
    }
  });
});

//Smothing Scrolling
$(function() {
  $('a.smooth-scroll').click(function(event) {
    event.preventDefault();
    //get all return id like #about
    let section = $(this).attr("href");
    $('html,body').animate({
      scrollTop: $(section).offset().top - 64
    }, 1250, "easeInOutExpo");
  });
});

myFuntion() {
    console.log('clicked');
    ga('send', 'event', {
    eventCategory: 'Outbound Link',
    eventAction: 'click',
    eventLabel: event.target.href
  });

//Close mobile menu on click
$(function() {
  $('.navbar-collapse ul li a').on('click touch', function() {
    $('.navbar-toggle').click();
  });
});
