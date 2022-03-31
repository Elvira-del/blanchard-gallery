const swiperHero = new Swiper(".hero-swiper", {
    allowTouchMove: false,
    direction: "horizontal",
    loop: true,
    effect: "fade",
    speed: 500,

    autoplay: {
        delay: 7000,
    },
});