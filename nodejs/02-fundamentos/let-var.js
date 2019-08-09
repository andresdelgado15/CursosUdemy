let nombre = 'wolverine'; // solo se puede inicializar una vez
if (true) {
    nombre = 'Magento'; // si quito el let lee el ultimo nombre

}

console.log(nombre);

let i = 20;
// solo se inicializa y funciona donde se declar

for (let i = 0; i <= 5; i++) {
    console.log(`i ${i}`);
}
console.log(i);