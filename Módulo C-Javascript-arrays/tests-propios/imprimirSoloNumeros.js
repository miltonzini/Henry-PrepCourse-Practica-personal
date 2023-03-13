// Variación del ejemplo 6
// imprimir los datos numéricos de un array
var arrayMixto = [1, 2, 3, 4, "palabra", "asd", 5];
arrayMixto.forEach((num) => {
    if(typeof(num) === "number"){
        console.log(num);
    }
});