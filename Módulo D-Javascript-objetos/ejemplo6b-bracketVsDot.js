var comidasB = {};
var diferenciaDeNotacionesB = function (propX, propY) {
    comidasB[propX] = ['Frutas', 'Vegetales']; // sin Comillas, toma Saludable (parámetro que le paso) en vez de propX.
    comidasB[propY] = ['Hamburguesas', 'Papas Fritas']; // sin Comillas, toma noSaludable (parámetro que le paso) en vez de propY.
};
diferenciaDeNotacionesB('saludable', 'NoSaludable');
console.log(comidasB);