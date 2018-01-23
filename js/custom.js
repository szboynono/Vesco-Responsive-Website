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
$(function () {
    $('#team-members').owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/* ===============
    Testimonails
==============*/
$(function () {
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
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1800
    });
});

/* ===============
    Clients
==============*/
$(function () {
    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/* ===============
    Navigation
==============*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            console.log('wow');
            //hide nav
            $('nav').removeClass('vesco-top-nav');
        } else {
            //show nav
            $('nav').addClass('vesco-top-nav');
        }
    });
});

//Smothing Scrolling
$(function () {
    $('a.smooth-scroll').click(function (event) {
        event.preventDefault();
        //get all return id like #about
        let section = $(this).attr("href");
        $('html,body').animate({
            scrollTop: $(section).offset().top
        }, 1250);
    });
});
