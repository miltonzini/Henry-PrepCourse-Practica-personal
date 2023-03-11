var devuelveUsuario = function () {
    return 'Camilo';
}
var devuelveSaludo = function () {
    return 'Hola';
}

var saludar = function(cb1, cb2) {
    return cb1() + ' ' + cb2();
}

var resultado = saludar(devuelveSaludo, devuelveUsuario);
console.log(resultado);



// // pequeña variación propia
var devuelveUsuario = function () {
    return 'Camilo';
}
var devuelveSaludo = function () {
    return 'Hola';
}

var saludar = function(cb1, cb2) {
    console.log(cb1() + ' ' + cb2());
}

saludar(devuelveSaludo, devuelveUsuario);