// Ejemplo 8
function encontrarLetraP(string) {
    var letras = string.split('');
    for (var i = 0; i < letras.length; i++) {
        if (letras[i] === 'p' || letras[i] === 'P') {
            console.log(string + " Contiene p");
            break;
        };
    };
};
encontrarLetraP('Javascript');
encontrarLetraP('Henry');
encontrarLetraP('Papapa');