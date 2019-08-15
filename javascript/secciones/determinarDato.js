function determinaDato(a) {

    if (a === undefined) {
        console.log("A es un Undefined no se que hacer");
    }
    if (typeof a === "string") {
        console.log(" A es un texto, puedo hacer opreacionescon textos");
    }
    if (typeof a === "object") {
        console.log(" A es un objeto ... pero puede ser cualquier cosa");
        if (a instanceof Number) {
            console.log("A es un objeto numerico...");

        }
    }
}

var b = new Number(3);
console.log(b);
determinaDato(b);