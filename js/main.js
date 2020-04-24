'use strict'

document.addEventListener('DOMContentLoaded', function() {
  const burger = document.getElementById('burger');
  const burgerNav = document.getElementById('burger__nav');

  burger.addEventListener('click', () => {
    burgerNav.classList.toggle('burger__nav_show');
  });
})