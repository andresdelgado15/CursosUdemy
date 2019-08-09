/* Imprimir las tablas de multiplicar*/
/*********************************** */

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // para llamr el archivo 

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e)); // manejar el error
        break;

    default:
        console.log('comando no reconocido');

}











// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]; // sirve para separar o mostrar despues de determinada parte del arreglo


// console.log(base);



// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo}`))
//     .catch(e => console.log(e)); // manejar el error