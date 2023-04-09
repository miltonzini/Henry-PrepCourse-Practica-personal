function sortArray(arrayOfStrings) {
    // Recibes un arreglo de strings.
    // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
    // de la longitud de cada string.
    // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
    // Tu código:
    var nuevoArray = [];
    var cantidadDeLetras = [];
    
    for (let i = 0; i < arrayOfStrings.length; i++) {
        var length = arrayOfStrings[i].length;
        if (!cantidadDeLetras.includes(length)) cantidadDeLetras.push(length);
    }
    
    var cantidadDeLetrasOrdenado = cantidadDeLetras.sort((a, b) => a - b);

    for (let i = 0; i < cantidadDeLetrasOrdenado.length; i++) {
        for (let j = 0; j < arrayOfStrings.length; j++) {
            if (arrayOfStrings[j].length == cantidadDeLetrasOrdenado[i]) nuevoArray.push(arrayOfStrings[j]);
        }
    }
    
    console.log(nuevoArray);
 }


var testArray = ["conejo", "casa", "repertorio", "as", "si"];
sortArray(testArray);

 // arrayCantidadesDeLetras = [6, 4, 10, 2]
 // arrayCantidadesOrdenadas = [2, 4, 6, 10]
