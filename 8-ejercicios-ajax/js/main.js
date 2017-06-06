"use strict";
var userToSearch = document.getElementById ("user-search");
var buttonElement = document.getElementById ("btn");
var userName = document.getElementById("user-name");
var avatar = document.getElementById("avatar");
var numbRepositories = document.getElementById("repositories");
var noResults = document.getElementById("no-results");
var results = document.getElementById("results");

function sendRequest (){
  var request = new XMLHttpRequest();
  var input = userToSearch.value;

  request.open ("GET", "https://api.github.com/users" + input, true);

  request.onload = function(){

    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.response);
      results.classList.add("show");
      userName.innerText = data.login;
      avatar.src = data.avatar_url;
      numbRepositories.innerText = data.public_repos;
      noResults.innerHTML = "";
    } else {
      noResults.innerHTML = "El usuario solicitado no está en GitHub";
      userName.innerText = "";
      avatar.src = "";
      numbRepositories.innerText = "";
      results.classList.remove ("show");
    }
  };

  request.onerror = function() {
    noResults.innerHTML = "Error al tratar de conectar con el servidor. Inténtelo de nuevo más tarde";
  };

  request.send ();
}

buttonElement.adEventListener("click", sendRequest);
