// function asAmirror(frase) {
//     // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
//     // La diferencia es que cada palabra estará escrita al inverso.
//     // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
//     // Tu código:
//     var array = frase.split('');
//     var arrayEspejo = [];
//     for (let i = array.length; i >= 0; i--) {
//        arrayEspejo.push(array[i]);
//     }
//     console.log(arrayEspejo.join(''));
//  }

//  asAmirror("Hoy es Domingo");

//  // Esto que hice convierte todo en espejo. Hay que hacerlo dejando cada palabra espejada en su lugar.

function asAmirror(frase) {
    // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
    // La diferencia es que cada palabra estará escrita al inverso.
    // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
    // Tu código:
    var arrayPalabras = frase.split(' ');
    var nuevoArray = [];
    for (let i = 0; i < arrayPalabras.length; i++) {
        var palabra = arrayPalabras[i].split('');
        var arrayCaracteresInvertidos = [];
        for (let j = palabra.length - 1; j >= 0; j--) {
            arrayCaracteresInvertidos.push(palabra[j]);
        }
        var palabraInvertida = arrayCaracteresInvertidos.join('');
        nuevoArray.push(palabraInvertida);
    }
    var stringFinal = nuevoArray.join(' ');
    console.log(stringFinal);
 }

 var fraseDePrueba = "Hoy es Domingo";
 asAmirror(fraseDePrueba);

 