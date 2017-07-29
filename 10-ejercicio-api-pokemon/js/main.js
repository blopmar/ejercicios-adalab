'use strict';

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
    container.innerHTML += '<p>Nombre: ' + pokemon.name +'</p>';
    container.innerHTML += '<p>Nº: ' + pokemon.id +'</p>';
    container.innerHTML += '<p><img src="' + pokemon.sprites.front_default +'"></p>';
    var types = pokemon.types;
    if(types.length === 1){
      container.innerHTML += '<p>Tipo: ' + types[0].type.name +'</p>';
    } else {
      container.innerHTML += '<p>Tipo: ' + types[0].type.name + ' / ' + types[1].type.name +'</p>';
    }
  } else {
    console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
  }
}
requestInfo(1);
requestInfo(2);
requestInfo(3);
requestInfo(4);
requestInfo(5);
requestInfo(6);
requestInfo(7);
requestInfo(8);
requestInfo(9);
requestInfo(10);
requestInfo(11);
requestInfo(12);
requestInfo(13);
requestInfo(14);
requestInfo(15);
requestInfo(16);
requestInfo(17);
requestInfo(18);
requestInfo(19);
requestInfo(20);
requestInfo(21);
requestInfo(22);
requestInfo(23);
requestInfo(24);
requestInfo(25);
requestInfo(26);
requestInfo(27);
requestInfo(28);
requestInfo(29);
requestInfo(30);
