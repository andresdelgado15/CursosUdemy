var hoy = new Date();
console.log(hoy.getDay() + "/" + hoy.getMonth() + "/" + hoy.getFullYear());

// para sumarle dias a las fechas
var fecha = new Date(2019, 1, 31);
Date.prototype.sumarDias = function(dias) {
    this.setDate(this.getDate() + dias);
    return this;
}

console.log(fecha);
console.log(fecha.sumarDias(+45));