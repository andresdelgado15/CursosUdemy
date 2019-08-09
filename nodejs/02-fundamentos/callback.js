// setTimeout(() => {
//     console.log('Hola mundo');
// }, 3000); // tiempo en el que tarda en aparecer

// funcion de flecha
let getUsuarioById = (id, callback) => {
        // traemos de la base de datos, el usuario y le pedimos los datos
        let usuario = {
            nombre: 'AndresDC',
            id
        }

        if (id === 20) {
            callback(`El usuario con el id ${ id }, no existe en la BD`);
        } else {
            callback(null, usuario);
        }
        // retornarle la informacion del usuario de la base de datos
        callback(usuario);
    }
    // pedimos los datos de usuarios como parametro el usuario de la base de datos
getUsuarioById(20, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de Bases de datos', usuario);
});