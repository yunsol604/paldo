$(window).scroll(function() { //스크롤링이 될 때마다
   if($(window).scrollTop() >= 100) {
      $('header').addClass('on')
   }
   else {
      $('header').removeClass('on')
   }
})

/* Header */
$('header #gnb').hover(function() { //over
   if($(window).width() > 900) {$('header').toggleClass('over')}
});
$('.btn_menu').click(function() {
   $('header #gnb').hover(function() { //over
      if($(window).width() > 900) {$('header').addClass('over')}
      else {$('header').removeClass('over')}
   });
   if($(window).width() > 900) {$('header').toggleClass('over')}
   if($(window).width() < 901) {$('.menu_right').addClass('over')}
})
$('.btn_menu_close').click(function() {
   $('header .menu_right').removeClass('over')
})
// $('header #gnb li').mouseover(function() { //out
//    $('header').addClass('on')
//    $(this).addClass('over')
// }, function() {
//    $('header #gnb li').mouseout(function() {
//       $('header').removeClass('on')
//       $(this).removeClass('over')
//    })
// });

/* Main-visual-Swiper */
const mainSwiper = new Swiper('.main_swiper', {
   effect: 'fade',
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   navigation: {
      nextEl: '.swiper-visual-next',
      prevEl: '.swiper-visual-prev',
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
});

/* Main-product-Swiper */
let prSwiper;

function initSwiper() { // Swiper 초기화 함수
   if ($(window).width() > 768) {
      if (!prSwiper) { // Swiper가 아직 초기화되지 않았을 때만 초기화
         prSwiper = new Swiper('.pr_swiper', {
            loop: true,
            autoplay: {
               delay: 3000,
               disableOnInteraction: false,
            },
            centeredSlides: true,
            slidesPerView: 3,
            spaceBetween: 73,
            navigation: {
               nextEl: '.swiper-btn-next',
               prevEl: '.swiper-btn-prev',
            },
         });
      }
   } else {
      if (prSwiper) { // 768 이하일 때 Swiper가 초기화된 상태이면 파괴
         prSwiper.destroy();
         prSwiper = null; // 인스턴스 참조 제거
      }
   }
}

initSwiper(); // Swiper 초기화 함수 실행

$(window).resize(function() {
   initSwiper(); // 창 크기에 맞게 Swiper 재초기화
});
