'use strict'

document.addEventListener('DOMContentLoaded', function() {
  const burger = document.getElementById('burger');
  const burgerNav = document.getElementById('burger__nav')

  burger.addEventListener('click', () => {
    burgerNav.classList.toggle('burger__nav_show');
  });
  
  $('.filter__slider').slick({
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    dots: false,
    variableWidth: true,
    prevArrow: '<button class="prev"></button>',
    nextArrow: '<button class="next"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 411,
        settings: {
          slidesToScroll: 1,
        }
      },
    ]
  });
})