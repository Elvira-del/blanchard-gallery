const swiperProjects = new Swiper(".projects-swiper", {
    direction: "horizontal",
    loop: false,

    navigation: {
        nextEl: ".projects__swiper-btn-next",
        prevEl: ".projects__swiper-btn-prev",
        disabledClass: "projects__swiper-btn-disabled",
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

        768: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 34,
        },

        1024: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            spaceBetween: 50,
        },

        1400: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});