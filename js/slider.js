$(document).ready(function () {
    $(".multiple-items").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      nextArrow: "<button type='button' class='slick-next'>next</button>",
      prevArrow: "<button type='button' class='slick-prev'>back</button>",
      dots: true,
      dotsClass: "button__bar",
    });
    // $(".multiple-items1").slick({
    //     infinite: true,
    //     speed: 1000,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     autoplay: false,
    //     autoplaySpeed: 3000,
    //     arrows: true,
    //     nextArrow: "<button type='button' class='slick-next1'>next</button>",
    //     prevArrow: "<button type='button' class='slick-prev1'>back</button>",
    //   });
    //   $('.multiple-items2').slick({
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     centerMode: true,
    //     dots: false,
    //     speed: 300,
    //     centerPadding: '20px',
    //     infinite: true,
    //     autoplaySpeed: 5000,
    //     arrows: true,
    //     nextArrow: "<button type='button' class='slick-next2'>next</button>",
    //     prevArrow: "<button type='button' class='slick-prev2'>back</button>",
    //     autoplay: true,
    //   });
    //   $(".multiple-items3").slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     adaptiveHeight: true,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1000,
    //     arrows: true,
    //     nextArrow: "<button type='button' class='slick-next'>next</button>",
    //     prevArrow: "<button type='button' class='slick-prev'>back</button>",
    //     dots: true,
    //     dotsClass: "button__bar",
    //   });
  });