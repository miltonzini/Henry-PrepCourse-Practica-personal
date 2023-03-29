function capicua(numero) {
    var arrayNumero = numero.toString().split('');
    var arrayInverso = [];

    for (var i = arrayNumero.length - 1; i >= 0; i--) {
        arrayInverso.push(arrayNumero[i]);
    }
    var numeroInvertido = arrayInverso.join('');
    var resultado;
    
    if (numero == numeroInvertido) {
        resultado = "es capicua\.";
    } else {
        resultado = "no es capicua\.";
    }
    console.log("El número " + numero + " " + resultado);
 }

var numerodePrueba1 = 12321;
var numerodePrueba2 = 123454321;
var numerodePrueba3 = 1232100;

capicua(numerodePrueba1);
capicua(numerodePrueba2);
capicua(numerodePrueba3);