// Estoy creando un nuevo método para arrays, accediendo al prototipo del objeto global "Array".
// Array.prototype es el prototipo del objeto global.
// mayoresQueTres es un método que estoy creando para que, dado un arreglo, devuelva 
// uno nuevo donde todos los números mayores que tres sean reemplazados por el booleano false

Array.prototype.mayoresQueTres = function() {
    var arregloModificado = [];

    for (let i = 0; i < this.length; i++) {
        if (this[i] > 3) arregloModificado.push(false);
        else arregloModificado.push(this[i]);
    }

    return arregloModificado;
}

var arregloPrueba = [0,1,2,3,4,6, 9];
var nuevoArreglo = arregloPrueba.mayoresQueTres();

console.log(nuevoArreglo);