let nombre = 'Deadpool';
let real = 'Wade Winston';
let nombreCompleto = `${nombre} ${real}`;

console.log(`${nombreCompleto}`);

function getNombre() {
    return `${nombre} es ${real}`
}

console.log(`El Nombre de: ${getNombre()}`);