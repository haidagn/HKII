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
// disabled login
const loginBtn = document.getElementById('loginbtn')
const input = document.getElementById('email')

input.addEventListener('keypress', (e) => {
    const value = e.currentTarget.value;
    if (value === "") {
        loginBtn.disabled = true;
    } else {
        loginBtn.disabled = false;
    }
})


// bật login
const openLoginBtn = document.querySelectorAll('[data-login-target]');
const closeLoginBtn = document.querySelectorAll('[data-login-close]');
const checkMark = document.getElementById('successanimation')

openLoginBtn.forEach(button => {
    button.addEventListener('click', () => {
        const login = document.querySelector(button.dataset.loginTarget)
        openLogin(login)
    })
})
closeLoginBtn.forEach(button => {
    button.addEventListener('click', () => {
        const login = button.closest('.body-login')
        closeLogin(login)
    })
})
function openLogin(login) {
    if (login == null) return
    login.classList.add('login-ative')
    checkMark.classList.add('d-none')
    checkMark.classList.remove('d-block')
}
function closeLogin(login) {
    if (login == null) return
    login.classList.remove('login-ative')
    checkMark.classList.remove('d-none')
    checkMark.classList.add('d-block')
}

// đăng Nhập
const openSucBtn = document.querySelectorAll('[data-success-target]');

openSucBtn.forEach(button => {
    button.addEventListener('click', () => {
        const success = document.querySelector(button.dataset.successTarget)
        openSuc(success)
    })
})
function openSuc(success) {
    if (success == null) return
    success.classList.add('success-ative')
}


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
    iconOpenNav.classList.add('d-none')
}
function closeNav(navs) {
    if (navs == null) return
    navs.classList.remove('nav-ative')
    iconOpenNav.classList.remove('d-none')
}
