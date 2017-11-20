$(document).ready(function(){
  $('.slick-slider').slick({
  	arrows: false
  });
  $('.testimonials-slider .right-arrow').click(function () {
  	$('.slick-slider').slick("slickNext");
  })
  $('.testimonials-slider .left-arrow').click(function () {
  	$('.slick-slider').slick("slickPrev");
  })
});