

// init Swiper:

import Glide from '@glidejs/glide'

function carousel() {
    new Glide('.glide').mount()

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
        observer: true, 
        autoHeight: true,
        loop: true,
        freeMode: true,
        freeModeSticky: true,
        freeModeMomentumBounce: false,
        breakpoints: {
            558: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3,
            },

            704: {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 4,
            },
            1000: {
                slidesPerView: 5,
                spaceBetween: 30,
                slidesPerGroup: 5,
            },
            1300: {
                slidesPerView: 6,
                spaceBetween: 30,
                slidesPerGroup: 6,
            }, 1500: {
                slidesPerView: 7,
                spaceBetween: 30,
                slidesPerGroup: 7,
            },
            1800: {
                slidesPerView: 8,
                spaceBetween: 30,
                slidesPerGroup: 8,
            },
            1980: {
                slidesPerView: 9,
                spaceBetween: 30,
                slidesPerGroup: 9,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


}