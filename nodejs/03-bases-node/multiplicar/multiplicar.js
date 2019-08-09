//requireds
const fs = require('fs'); // que ya viene con node
const colors = require('colors');


let listarTabla = (base, limite = 10) => {


    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}\n`);
    }


}

/* creamos una funcion 
creamos la funcion crear archivo que recibe la base como parametro
retornamos una promesa 
*/
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El numero ingresado "${base}" No es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += (`${base} * ${i} = ${base * i}\n`);
        }


        fs.writeFile(`tablas/tabla-${base}- al - ${limite}.txt`, data, (err) => {
            if (err) reject(err) //throw err;
            else //creamos el else
                resolve(`tabla-${base}- al - ${limite}.txt`) // espera el nombre del archivo de app.js
                //console.log(`el archivo tabla-${base}.txt ha sido creado`);// quitamos el console para ponerlo en el resolve()
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}