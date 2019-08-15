var PI = Math.PI; // declarar PI
var E = Math.E; // declarar e

console.log(PI);
console.log(E);

var num1 = 10.456789;

console.log(num1);
console.log(Math.round(num1 * 100) / 100); // numeros aleatorios hasta el 100
console.log(Math.floor(num1));

function randomEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
console.log(randomEntre(500, 1000)); // sacar un numero entre 500 y 1000
console.log(Math.sqrt(89)); // sacar la raiz de un numero
console.log(Math.pow(9, 3)); // elevar un numero a su exponente 5 elevado a la 3