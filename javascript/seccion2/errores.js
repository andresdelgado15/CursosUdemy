try {
    throw {
        nombrerror: "Error tipo 1",
        accion: "Salir corriendo a echarle agua al servidor",
        codeerror: 1
    }

    console.log("Esta parte nunca se ejecuta");

} catch (e) {

    console.log(e);
    console.log(e.nombrerror);
    console.log(e.accion);
    console.log(e.codeerror);

    console.log("Parte del Catch");

} finally {
    console.log("Finalmente");
}




// try {
//     var a = 100;

//     if (a === 101) {
//         throw 'que mal'; // lanzar
//     } else {
//         throw 'ohhh'; // lanzar
//     }

//     console.log("El valor de a : ", a);

// } catch (e) {
//     if (e === "que mal") {
//         console.log("Error tipo 1");
//     }
//     if (e === "ohhh") {
//         console.log("Error tipo 2");
//     }


// } finally {
//     console.log("Finalmente");
// }