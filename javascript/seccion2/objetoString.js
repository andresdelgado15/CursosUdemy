var b = "Andres";

var a = new String("Delgado Castellano");
console.log(a);

console.log(a.toUpperCase()); // cambiar a mayuscula

console.log(a.toLowerCase()); // cambiar a minuscula

i = a.lastIndexOf("a"); // conocer la posicion en la que esta
console.log("la letra esta en la posicion: ", i);

var nombre = a.substr(0, a.indexOf(" "));
console.log(nombre);
var split = a.split();
console.log(split);