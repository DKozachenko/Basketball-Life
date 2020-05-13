'use strict'

document.addEventListener('DOMContentLoaded', function() {
  const burger = document.getElementById('burger');
  const burgerNav = document.getElementById('burger__nav');

  const calendarButton = document.getElementById('calendar__button');
  const calendar = document.getElementById('calendar2');
  const tbody = document.querySelector('tbody');
  const thead = document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(2)');

  const buttonBets = document.getElementById('buttons_bets');
  const collectionOfBetItems = document.querySelectorAll('.betting__item');
  let counterBets = 0;

  const todayButton = document.getElementById('today');
  const tomorrowButton = document.getElementById('tomorrow');
  const bettingRow2 = document.querySelector('.betting > .container > .row:nth-child(2) > .col-lg-8');
  const bettingRow3 = document.querySelector('.betting > .container > .row:nth-child(3) > .col-lg-8');

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  burger.addEventListener('click', () => {
    burgerNav.classList.toggle('burger__nav_show');
  });

  calendarButton.addEventListener('click', () => {
    calendar.classList.toggle('calendar_show');
  });

  tbody.addEventListener('click', (e) => {
    let currentDay;
    let currentMonth = '';
    let currentYear = '';
    let indexProbel;
    if (e.target.textContent != '') {
      currentDay = e.target.textContent;

      for (let i = 0; i < thead.textContent.length; i++) {
        if (thead.textContent[i] != ' ') {
          currentMonth += thead.textContent[i];
        } else {
          indexProbel = i;
          break;
        }
      }
      switch (currentMonth) {
        case 'Январь':
          currentMonth = '01';
          break;
        case 'Февраль':
          currentMonth = '02';
          break;  
        case 'Март':
          currentMonth = '03';
          break;
        case 'Апрель':
          currentMonth = '04';
          break;  
        case 'Май':
          currentMonth = '05';
          break; 
        case 'Июнь':
          currentMonth = '06';
          break; 
        case 'Июль':
          currentMonth = '07';
          break; 
        case 'Август':
          currentMonth = '08';
          break;    
        case 'Сентябрь':
          currentMonth = '09';
          break;   
        case 'Октябрь':
          currentMonth = '10';
          break;  
        case 'Ноябрь':
          currentMonth = '11';
          break;  
        case 'Декабрь':
          currentMonth = '12';
          break;  
      }
      for (let i = indexProbel + 1; i < thead.textContent.length; i++) {
        currentYear += thead.textContent[i];
      }

      calendarButton.innerHTML = currentDay + '.' + currentMonth + '.' + currentYear;

      let randIndex = randomInteger(0, 23);
      let bettingRow3Lenght = bettingRow3.children.length;

      while (bettingRow2.firstChild) {
        bettingRow2.removeChild(bettingRow2.firstChild);
      }

      bettingRow2.insertAdjacentElement("afterbegin", collectionOfBetItems[randIndex]);

      while (bettingRow3.firstChild) {
        bettingRow3.removeChild(bettingRow3.firstChild);
      }

      for (let i = 0; i < bettingRow3Lenght; i++) {
        randIndex = randomInteger(0, 23);
        bettingRow3.insertAdjacentElement("afterbegin", collectionOfBetItems[randIndex]);

      }
    }
    
  });

  buttonBets.addEventListener('click', () => {
    let counterOpenBets = 0;
    for (let i = 0; i < collectionOfBetItems.length; i++) {
      if ((getComputedStyle(collectionOfBetItems[i]).display == 'none') && (counterOpenBets < 8)) {
        collectionOfBetItems[i].style.display = 'block';
        counterOpenBets++;
        counterBets++;
      }
    }
    
    if (counterBets == 16) {
      buttonBets.style.display = 'none';
    }
  });

  todayButton.addEventListener('click', () => {
    location.reload();
  });

  tomorrowButton.addEventListener('click', () => {
    let randIndex = randomInteger(0, 23);
    let bettingRow3Lenght = bettingRow3.children.length;

    while (bettingRow2.firstChild) {
      bettingRow2.removeChild(bettingRow2.firstChild);
    }

    bettingRow2.insertAdjacentElement("afterbegin", collectionOfBetItems[randIndex]);

    while (bettingRow3.firstChild) {
      bettingRow3.removeChild(bettingRow3.firstChild);
    }

    for (let i = 0; i < bettingRow3Lenght; i++) {
      randIndex = randomInteger(0, 23);
      bettingRow3.insertAdjacentElement("afterbegin", collectionOfBetItems[randIndex]);
      
    }
    
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

  //Calendar
  function Calendar2(id, year, month) {
    var Dlast = new Date(year, month + 1, 0).getDate(),
      D = new Date(year, month, Dlast),
      DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
      DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
      calendar = '<tr>',
      month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    if (DNfirst != 0) {
      for (var i = 1; i < DNfirst; i++) calendar += '<td>';
    } else {
      for (var i = 0; i < 6; i++) calendar += '<td>';
    }
    for (var i = 1; i <= Dlast; i++) {
      if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
        calendar += '<td class="today">' + i;
      } else {
        calendar += '<td>' + i;
      }
      if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
        calendar += '<tr>';
      }
    }
    for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
    document.querySelector('#' + id + ' tbody').innerHTML = calendar;
    document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
    if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
      document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }
  }
  Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
  // переключатель минус месяц
  document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function () {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) - 1);
  }
  // переключатель плюс месяц
  document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function () {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) + 1);
  }
})