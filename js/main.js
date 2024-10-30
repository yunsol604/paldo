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
   if($(window).width() > 900) {$('header').toggleClass('over')}
});
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
function initSwiper() { // Swiper 초기화 함수
   if ($(window).width() > 768) {
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
}

initSwiper(); // Swiper 초기화 함수 실행

$(window).resize(function() { // 768px 이상일 때 Swiper 다시 실행
   if ($(window).width() <= 768) {
      if (prSwiper) prSwiper.destroy(); // Swiper 비활성화
   } else {nitSwiper();} // Swiper 활성화
});
