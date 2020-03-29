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
    // autoplay: true
  });

  $('.reviews__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    focusOnSelect: true,
    infinite: true,
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
    centerPadding: '30px',
    centerMode: true,
    arrows: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });




});