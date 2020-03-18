$(function () {

  $('.video-slider__big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.video-slider__small'
  });
  $('.video-slider__small').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.video-slider__big',
    dots: false,
    focusOnSelect: true
  });






});