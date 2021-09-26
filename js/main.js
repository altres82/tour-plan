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

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [7.573653, 79.803867],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/flag.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/ball.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});



 ymaps.ready(init);
      function init() {
        var myMap = new ymaps.Map("map", {
          center: [7.573653, 79.803867],
          zoom: 14
        });
      }
