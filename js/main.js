$(window).scroll(function() { // 스크롤 될 때마다 실행
   if ($(window).scrollTop() >= 100) {
      $('header').addClass('on');
   } else {
      $('header').removeClass('on');
   }
});

/* Header */
// $().click(function() {})
// $().hover(function() {},function() {})
$('header #gnb>li').hover(function() { // 마우스 오버
   if ($(window).width() > 1018) {
      $('header').addClass('over');
      $(this).addClass('over');
   }
}, function() {
   $(this).removeClass('over');
});

$('.btn_menu').click(function() {
   if ($(window).width() > 1018) {
      $('header').addClass('over');
   } else if ($(window).width() < 1019) {
      $('.menu_right').addClass('over');
   }
});

$('header').mouseleave(function() {
   if ($(window).width() > 1018) {
      const gnbHover = $('#gnb').is(':hover');
      if (!gnbHover) {
         $('header').removeClass('over');
      }
   }
});

$('.btn_menu_close').click(function() {
   $('header .menu_right').removeClass('over');
});

/* btn_goTop */
$('.btn_goTop').click(function(e) {
   e.preventDefault(); // 기본 동작 방지
   $('html, body').animate({ scrollTop: 0 }, 500);
});

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
   if ($(window).width() > 837) {
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