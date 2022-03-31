const swiperEvents = new Swiper(".events-swiper", {
    direction: "horizontal",
    loop: false,

    pagination: {
        el: ".events__swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".events__swiper-btn-next",
        prevEl: ".events__swiper-btn-prev",
        disabledClass: "events__swiper-btn-disabled",
    },

    a11y: {
        prevSlideMessage: "Предыдущий слайд",
        nextSlideMessage: "Следующий слайд",
        paginationBulletMessage: "Переход к слайду {{index}}",
    },

    breakpoints: {
        320: {
            slidesPerGroup: 1,
            slidesPerView: 1,
        },

        768: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 34,
        },

        1024: {
            slidesPerGroup: 2,
            slidesPerView: 3,
            spaceBetween: 27,
        },

        1400: {
            slidesPerGroup: 2,
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});