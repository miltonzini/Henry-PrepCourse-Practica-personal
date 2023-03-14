// Otra variación del ejemplo 6
// Dado un array con datos mixtos devolver nuevo array solo con datos numéricos.

var arrayMixto = [1, 2, 3, 4, "palabra", "asd", 5];
var nuevoArray = []
for (var i = 0; i < arrayMixto.length; i++) {
    if (typeof(arrayMixto[i]) === "number") nuevoArray.push(arrayMixto[i]);
}


console.log(nuevoArray);
return nuevoArray;