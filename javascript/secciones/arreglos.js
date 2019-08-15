var arr = [5, 4, 3, 2, 1];


arr.reverse(); // parar aorganizarlo
console.log(arr);
arr = arr.map(function(elem) {
    elem *= elem;
    return elem;
});
console.log(arr);

arr = arr.map(Math.sqrt); // para scar la raiz
console.log(arr);

arr = arr.join(" | "); // para separar por loq ue nosotros definamos
console.log(arr);

arr = arr.split(" | ");
console.log(arr);


arr.push("8"); // para agregar en la ultima linea
console.log(arr);

arr.unshift("0"); // para colocar al principio
console.log(arr);

console.log(arr.toString()); // cambiarlo a texto

var elimine = arr.pop(); // guardamos en una variable y eliminiamos el ultimo numero
console.log(arr, elimine);

arr.splice(1, 2, "10", "20", "30");
console.log(arr);

arr = arr.slice(2, 4); // desde la posicion que quiero cortar hasta donde va -1
console.log(arr);