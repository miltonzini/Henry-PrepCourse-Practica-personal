// Experimento propio
// Quiero crear un método para usar en "describeArray" arrays, que me arroje ciertas informaciones:
// -cantidad de elementos
// -suma de elementos numéricos
// -console.log del primer y último elemento
// que informe si todos los datos son o no números.

var arrayNuevo = [1, 5, 7, 6, 0, "a"];

Array.prototype.describirArray = function() {
    console.log('* Este array tiene ' + this.length + ' elementos.');
    
    var lastIndex = this.length - 1;
    console.log('* El primer elemento es un dato del tipo "' + typeof(this[0]) + '" y su valor es ' + this[0]) + '.';
    console.log('* El último elemento es un dato del tipo "' + typeof(this[lastIndex]) + '" y su valor es ' + this[lastIndex]) + '.';
    
    var suma = 0;
    for (let i = 0; i < this.length; i++) {
        //var sonTodosNum = true;
        if (typeof(this[i]) === 'number') suma += this[i];
    };
    
    console.log('* La suma de todos los elementos numéricos es ' + suma);

    var hayDatosNoNumericos = false;
    for (let i = 0; i < this.length; i++) {
        if (typeof(this[i]) != 'number') {
            hayDatosNoNumericos = true;
            break;
        }
    };

    if (hayDatosNoNumericos) {
        console.log('! Advertencia, en el array tabién hay datos no numéricos.');
    } else {
        console.log("* (todos los elementos son números)");
    };

}

arrayNuevo.describirArray();