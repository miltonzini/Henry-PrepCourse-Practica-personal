// variaciónes del ejercicio dePalabraAFrase (del Henry Prepcourse, modulo arrays)
var palabras = ['Palabras', 'separadas', 'por', 'guiones'];
function unirPalabrasConGuiones(palabras) {
    var frase = palabras.join('-');
    return frase;
 };
 console.log(unirPalabrasConGuiones(palabras));




var palabras2 = ['Palabras', 'separadas', 'por', 'espacios'];
function dePalabrasAFrase(palabras2) {
    var frase = palabras2.join(' ');
    return frase;
 };
 console.log(dePalabrasAFrase(palabras2));



var pi = ['3', ',', '1', '4', '1', '6', '...'];
function unirSinEspacios(pi) {
    var frase = pi.join('');
    return frase;
 };
 console.log(unirSinEspacios(pi));


