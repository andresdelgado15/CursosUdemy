// vamos a crear primero la base de datos, pero para eso creamos le primer elemento
// arreglo de objetos
// si queremos varios objetos a la ves los encerramos en corchetes

// esto son los datos de la base de datos, mini empleados

/******* Tabla Empleados ********++*/
let empleados = [{
    id: 1,
    nombre: 'Andres',
    Apellido: 'Delgado'
}, {
    id: 2,
    nombre: 'Jennifer',
    apellido: 'Daniel',
}, {
    id: 3,
    nombre: 'Daniel',
    Apellido: 'Rodriguez'
}];

/******* Tabla Salarios ********++*/

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

//creamos empleado por Id
// obtener empleado por el id
// creamos una funcion para obtener  el id del empleado
let getEmpleado = (id, callback) => { // queremos obtener empleado por el id
        // este es el empleado que queremos buscar 
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) { //SI EL EMPLEADO NO EXISTE
            callback(`No existe un empleado con el ID ${ id }`)
        } else {
            callback(null, empleadoDB) // se manada un null cunado no existe ningun error
        }

    }
    // si encuentra un si encuentra un salario para el empleado
    // error no se encontro un salaio para el usuario ANDRES


/*
creamos una consulta a la base de datos en donde existe una primaria y una foranea.
pero para eso necesitamos crear un registro en un objeto o variable.

salario => salario.id === empleados.id
registro => primarioa === foranea ( debe conseder en un termino en este caso es el id)
*/


let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleados.id);
    if (!salarioDB) {
        callback(`No se encontro un salario  para el usuario ${empleado.nombre}`)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}

getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El salario de ${ resp.nombre} es de ${resp.salario}$`);
    })

});