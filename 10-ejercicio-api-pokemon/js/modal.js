'use strict';
var apiLink = document.querySelector('.footer a');
var modal = document.querySelector('.modal');
var button = document.querySelector('.btn-close');
var modalTitle = document.querySelector('.modal h2');

function showModal(event) {
  modalTitle.innerHTML = event.target.innerHTML; // El event.target es el elemento del DOM al que se le ha hecho click //
  modal.classList.add('modal-show');
}

apiLink.addEventListener ('click', showModal);

function closeModal() {
  modal.classList.remove('modal-show');
}

button.addEventListener ('click', closeModal);
