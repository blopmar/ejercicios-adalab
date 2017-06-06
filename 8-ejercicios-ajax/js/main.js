"use strict";
var userToSearch = document.getElementById ("user-search");
var buttonElement = document.getElementById ("button");
var userName = document.getElementById("user-name");
var avatar = document.getElementById("avatar");
var repositoriesNumb = document.getElementById("repositories");
var noResults = document.getElementById("no-results");
var results = document.getElementById("results");

function sendRequest(){
  var request = new XMLHttpRequest();
  var input = userToSearch.value;

  request.open ("GET", "https://api.github.com/users/" + input, true);

  request.onload = function(){

    if (request.status >= 200 && request.status < 400) {
      var user = JSON.parse(request.response);
      results.classList.add("show");
      userName.innerText = user.login;
      avatar.src = user.avatar_url;
      repositoriesNumb.innerText = user.public_repos;
      noResults.innerHTML = "";
    } else {
      noResults.innerHTML = "El usuario solicitado no está en GitHub";
      userName.innerText = "";
      avatar.src = "";
      repositoriesNumb.innerText = "";
      results.classList.remove ("show");
    }
  };

  request.onerror = function() {
    noResults.innerHTML = "Error al tratar de conectar con el servidor. Inténtelo de nuevo más tarde";
  };

  request.send ();
}

buttonElement.addEventListener("click", sendRequest);
