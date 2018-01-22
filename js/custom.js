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