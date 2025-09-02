$(document).ready(function () {

  $('.slider-pro').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.blog-slider-pro').slick({
    dots: true,
    infinite: false,
    arrows:false,
    autoplay:true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 768, // 👈 Add this breakpoint
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },

  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]

  });
});

$(document).ready(function () {
  $(".menu-icon").click(function () {
    $(".menu-list").slideToggle("fast", function () {
      if ($(this).is(":visible")) {
        $(".banner").css("margin-top", $(".menu-list").outerHeight() -80 + "px");
      } else {
        $(".banner").css("margin-top", "0");
      }
    });
  });
});