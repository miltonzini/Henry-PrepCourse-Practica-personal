// Sintaxis Actual: Expresión de clase

class Auto {
    constructor(puertas, color, marca, año, ruedas) {
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año;
        this.ruedas = ruedas;
    }
    informacion() {
        console.log('Este es un ' + this.marca + ' de color ' + this.color);
    }
}
var miSegundoAuto = new Auto (4, 'blanco', 'Fiat', 2015, 4);
console.log(miSegundoAuto);
console.log(miSegundoAuto.marca);

console.log(' ');
console.log(' ');
miSegundoAuto.informacion();