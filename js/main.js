$(window).scroll(function() { //스크롤링이 될 때마다
   if($(window).scrollTop() >= 800) {
      $('header').addClass('on')
   }
   else {
      $('header').removeClass('on')
   }
})

/* Header */
$('header').hover(function() { //over
   // $('.header_left .allmenu_wrap').stop().slideDown();
   $('header').toggleClass('on')
});
$('.header_left .allmenu_wrap').hover(function() { //out
   $('.header_left .allmenu_wrap').stop().slideDown();
   $('header').addClass('on')
}, function() {
   $('.header_left .allmenu_wrap').stop().slideUp();
   $('header').removeClass('on')
});

/* Main-visual-Swiper */
const mainSwiper = new Swiper('.main_swiper', {
   effect: 'fade',
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
});

// const mainSwiper = new Swiper('.main_swiper', {
//    effect: 'fade',
//    loop: true,
//    autoplay: {
//       delay: 1000,
//       disableOnInteraction: false,
//    },
//    // pagination: {
//    //    el: '.swiper-pagination',
//    //    clickable: true,
//    // },
// });

/* Main-product-Swiper */
const prSwiper = new Swiper('.pr_swiper', {
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   centeredSlides: true,
   slidesPerView: 3,
   spaceBetween: 80,
   navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
   },
})