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
    arrows: false,
    focusOnSelect: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.reviews__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [{
      breakpoint: 1112,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }, ]
  });

  $('.price__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    arrows: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.header__menu-btn').on('click', function () {
    $(this).toggleClass('active');
    $('.menu__list').slideToggle(840);
  });

  $(window).resize(function () {
    if ($(window).width() > 840) {
      $('.menu__list').removeAttr('style');
    }
  });

  $(".rate-star").rateYo({
    rating: 5,
    ratedFill: "#f80759",
    spacing: "8px",
    starWidth: "17px",
    halfStar: true,
    readOnly: true
  });

});