/*
Ejercicio 1.
Creamos una función que tomará como parámetros un número y un array de números.
La función va a devolver el número de veces que ese número está repetido en el array.
*/

var arrayNumbers = [1, 6, 8, 2, 6, 5, 4, 6];
var targetNumber = 6;
var result = 0;

function repeated (numberToFind) {
for(var i=0; i < arrayNumbers.length; i++){
  if(arrayNumbers[i] === numberToFind) {
    result++ ;
  }
}
return result;
}

console.log(repeated(targetNumber));
