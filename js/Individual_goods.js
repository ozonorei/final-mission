const swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },

    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    },
});

