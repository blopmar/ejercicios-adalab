'use strict';
var toggleMenu = function () {
  var menu = document.getElementById('js-small-menu');
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
  } else {
    menu.classList.add('show');
  }
};

document.getElementById('js-button-icon').addEventListener('click', toggleMenu);
