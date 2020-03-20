$(function () {

  $('.video-slider__big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.video-slider__small'
  });
  $('.video-slider__small').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.video-slider__big',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    // autoplay: true
  });

  $('.reviews__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    focusOnSelect: true
  });

  $('.price__slider').slick({
    slidesToShow: 5,
    centerMode: true,
    arrows: false,
    focusOnSelect: true
  });




});