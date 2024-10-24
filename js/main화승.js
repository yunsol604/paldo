/* header on */
// $('header').hover(function() {
//    $('header').toggleClass('on');})

$(window).scroll(function() { //스크롤링이 될 때마다
   if($(window).scrollTop() >= 660) {
      $('header').addClass('on')
   }
   else {
      $('header').removeClass('on')
   }
   $('.family_wrap').hide()
})

/* Header */
$('.header_left #gnb>li').hover(function() { //over
   $('.header_left .allmenu_wrap').stop().slideDown();
   $('header').addClass('on')
});
$('.header_left .allmenu_wrap').hover(function() { //out
   $('.header_left .allmenu_wrap').stop().slideDown();
   $('header').addClass('on')
}, function() {
   $('.header_left .allmenu_wrap').stop().slideUp();
   $('header').removeClass('on')
});

/* Footer - Family Site */
$('.familysite_wrap').click(function() {
   $('.family_wrap').toggle()
})

/* Main-manage-Swiper*/
const mainSwiper = new Swiper ('.swiper_content', {
   // effect:
   loop: false,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   centeredSlides: true,
   slidesPerView: 3,
   // spaceBetween: 150,
   speed: 300,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
   },
})