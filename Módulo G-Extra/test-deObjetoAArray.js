
function deObjetoAarray(objeto) {
    // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
    // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
    // Estos elementos debe ser cada par clave:valor del objeto recibido.
    // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
    // Tu código:
    var claves = Object.keys(objeto); 
    var arreglodeArreglos = [];
    //console.log(claves);
    for (let i = 0; i < claves.length; i++) {
        var array = [claves[i], objeto[claves[i]]];
        arreglodeArreglos.push(array);
    }
    console.log(arreglodeArreglos);
    
 }
var objetoDePrueba = {
    clave1: "valor1",
    clave2: "valor2",
    clave3: "valor3",
    clave4: "valor4",
};


deObjetoAarray(objetoDePrueba);