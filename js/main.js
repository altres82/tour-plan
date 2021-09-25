const swiper = new Swiper('.swiper', {
  // Optional parameters
 // direction: 'vertical', убрали вертикаль
  loop: true, //перелистываем на 1 слайдер когда подходим к концу

  // If we need pagination точки на слайдаре
  //pagination: {
  //  el: '.swiper-pagination',
  //},

  // Navigation arrows стрелочки
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

  // And if we need scrollbar скролл
 // scrollbar: {
 //   el: '.swiper-scrollbar',
 // },
 
});
var mySwiper = new Swiper('.swiper', {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
