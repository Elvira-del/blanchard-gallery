const swiperGallery = new Swiper(".gallery-swiper", {
    direction: "horizontal",
    loop: false,

    navigation: {
        nextEl: ".gallery-swiper__btn-next",
        prevEl: ".gallery-swiper__btn-prev",
        disabledClass: "gallery-swiper__btn-disabled",
    },

    pagination: {
        el: ".gallery-swiper__pagination",
        type: "fraction",
    },

    a11y: {
        prevSlideMessage: "Предыдущий слайд",
        nextSlideMessage: "Следующий слайд",
    },

    breakpoints: {
        320: {
            slidesPerGroup: 1,
            slidesPerView: 1,
        },

        576: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 38,
        },

        768: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 38,
        },

        1200: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 34,
        },

        1400: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});