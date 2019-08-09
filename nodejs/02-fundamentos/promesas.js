let empleados = [{
    id: 1,
    nombre: 'Andres',
    Apellido: 'Delgado'
}, {
    id: 2,
    nombre: 'Jennifer',
    apellido: 'Barrera',
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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        //resolve, si logra encontrar algo.
        //reject si no encuentra nada en la base de datos 

        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${ id }`)
        } else {
            resolve(empleadoDB); // se manada un null cunado no existe ningun error
        }
    });

}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`No se encontro un salario  para el usuario ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }

    });
}



getEmpleado(10).then(empleado => {

    getSalario(empleado).then(resp => {
        console.log(`El salario de ${ resp.nombre} es de ${ resp.salario}$`);
    }, err => {
        console.log(err);

    });
}, (err) => {
    console.log(err);
});