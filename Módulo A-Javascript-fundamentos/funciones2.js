function cuidadoConElConsoleLog(nombre) {
    //console.log(nombre);
    return nombre;
}

function otraFuncion() {
    return (
        "El nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " + 
        cuidadoConElConsoleLog('Camilo')
    );
}
console.log("test test");
otraFuncion();


// Para mí este ejemplo debería llamarse "cuidadoConElReturn" en vez de "cuidadoConElConsoleLog" ya que, 
// si bien hace foco en no confundirse el return y el console.log, lo imnportante es simplemmente no ollvidarse
// de indicar el return de una función ya que, si esto no está, la misma devolverá undefined.