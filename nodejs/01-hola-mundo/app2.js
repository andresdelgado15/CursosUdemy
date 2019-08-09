function saludar(nombre) { // creamos una funcion y le colocamos como parametro
    let mensaje = `Hola ${ nombre }`; // creamos las variables
    return mensaje; // todas las funciones retornan algo
}

let saludo = saludar('Andres Delgado Castellano');

console.log(saludo);