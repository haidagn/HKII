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


// bat tat menu mobile 
const openNavBtn = document.querySelectorAll('[data-nav-target]');
const closeNavBtn = document.querySelectorAll('[data-nav-close]');
const iconOpenNav = document.getElementById('iconopennav')

openNavBtn.forEach(button => {
    button.addEventListener('click', () => {
        const navs = document.querySelector(button.dataset.navTarget)
        openNav(navs)
    })
})
closeNavBtn.forEach(button => {
    button.addEventListener('click', () => {
        const navs = button.closest('.navs-links')
        closeNav(navs)
    })
})
function openNav(navs) {
    if (navs == null) return
    navs.classList.add('nav-ative')
    // iconOpenNav.classList.add('d-none')
}
function closeNav(navs) {
    if (navs == null) return
    navs.classList.remove('nav-ative')
    // iconOpenNav.classList.remove('d-none')
}



// navgation scroll

const body = document.body
const navBars = document.getElementById('navsbar')

let lastScroll = 0

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 300) {
        body.classList.add('tranparent-scroll-up')
        navBars.setAttribute("style", "background-color: transparent; box - shadow: none;")
    }
    if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up')
        body.classList.add('scroll-down')
        navBars.setAttribute("style", "")
    }
    if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-down')
        body.classList.add('scroll-up')
        navBars.setAttribute("style", "")
    }
    lastScroll = currentScroll
})