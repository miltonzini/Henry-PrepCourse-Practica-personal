var comidasA = {};
var diferenciaDeNotacionesA = function (propX, propY) {
    comidasA.propX = ['Frutas', 'Vegetales'];
    comidasA['propY'] = ['Hamburguesas', 'Papas Fritas']; // con Comillas
};
diferenciaDeNotacionesA('saludable', 'NoSaludable');
console.log(comidasA);