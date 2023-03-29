var array = ["conejo", "casa", "bote"];

function filter(arrayOfStrings) {
    // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
    // Luego retorna un nuevo arreglo con estos elementos.
    // Tu código:
    var nuevoArray = [];
 
    for (let i = 0; i < arrayOfStrings.length; i++) {
       if (arrayOfStrings[i][0] === "c") {
          nuevoArray.push(arrayOfStrings[i]);
       }
    }

    console.log(nuevoArray);
 }

 filter(array);
 
 // En realidad no está usando callbacks, no sé por qué lo dieron en esta categoría
 // Elaborar algo propio como variación de esto que sí haga uso de callbacks.