//Инициализируем Slider
new Swiper('.swiper-container',{
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      speed: 10,
    },
    thumbs: {
      swiper:{
        el: '.image-mini-slider',
        slidesPerView: 5,
      }
    },
    keyboard: {
      enabled: true,
      onlyInVieport: true,
      pageUpDown: true,
    },
    autoHeight: true,
    slidesPerView: 1,
    loop: true,
});
