
$(document).ready(function(){
$(document).scroll(function(){
  $('.navbar-collapse').collapse('hide');
});
});
$(document).on('click',function(){
  $('.collapse').collapse('hide');
});

// Slick js
$(document).ready(function(){
  $('.swiper-main').slick({
    dots: true,
    infinite: true,
    speed: 200,
    fade: true,
    cssEase: 'ease-in-out',
    autoplay:true,
    arrows:true,

  });
});
