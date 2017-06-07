"use strict";
var toggleMenu = function () {
  var menu = document.getElementById('js-small-menu');
  if (menu.classList.contains('hide')) {
    menu.classList.remove('hide');
  } else {
    menu.classList.add('hide');
  }
};

document.getElementById('js-button-icon').addEventListener('click', toggleMenu);
