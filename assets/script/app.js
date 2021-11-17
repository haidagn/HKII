// slider-section2
$('.section-2 .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

var owl = $('.section-2 .owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.butn-outline_slider').click(function () {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.butn-primary_slider').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

// $('.section-5 .owl-carousel').owlCarousel({
//     loop: true,
//     nav: false,
//     dots: false,
//     autoWidth: false,
//     mergeFit: false,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 3
//         },
//         1000: {
//             items: 4
//         }
//     }
// })