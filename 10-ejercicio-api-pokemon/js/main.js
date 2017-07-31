'use strict';

var menuButton = document.querySelector('.btn-menu');
var mobileMenu = document.querySelector('.menu-small');

menuButton.addEventListener('click', showOrHideMenu);

function showOrHideMenu() {
  mobileMenu.classList.toggle('menu-small-show');
}

function requestInfo(number) {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://pokeapi.co/api/v2/pokemon/' + number + '/', true);
  request.addEventListener('load', function(){
    refreshWeb(request);
  });
  request.addEventListener('error', function() {
    console.log('Error al tratar de conectarse con el servidor');
  });
  request.send();
}

function refreshWeb(request){
  if(request.status >= 200 && request.status < 400) {
    var pokemon = JSON.parse(request.responseText);
    var container = document.querySelector('.cards-container');
    var pokemonHtml = '';
    pokemonHtml += '<div class="pokemon-card"><p><img src="' + pokemon.sprites.front_default +'"></p>';
    pokemonHtml += '<p>Nombre: ' + pokemon.name +'</p>';
    pokemonHtml += '<p>Nº: ' + pokemon.id +'</p>';
    pokemonHtml += '<p>Peso: ' + pokemon.weight +'</p>';
    var types = pokemon.types;
    if(types.length === 1){
      pokemonHtml += '<p>Tipo: ' + types[0].type.name +'</p></div>';
    } else {
      pokemonHtml += '<p>Tipos: ' + types[0].type.name + ' / ' + types[1].type.name +'</p></div>';
    }
    container.innerHTML += pokemonHtml;
  } else {
    console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
  }
}
for (var i = 1; i <= 30; i++) {
  requestInfo(i);
  }
