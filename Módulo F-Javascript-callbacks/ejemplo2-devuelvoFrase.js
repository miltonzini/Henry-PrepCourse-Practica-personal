var devuelvoFrase = function(comida) {
    return 'Hoy quiero comer: ' + comida;
}

var hablar = function(comida, cb) {
    return cb(comida);
}

var fraseFinal = hablar('Pizza', devuelvoFrase);
console.log(fraseFinal);