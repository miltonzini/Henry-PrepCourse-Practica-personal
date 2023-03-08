// Ejemplo 4
// retornar true si todos los números del arrey son mayores a 5
var numeros = [1, 6, 8, 9];
var cumplenCondicion = numeros.every((num) => {
    return num > 5;
});
console.log(cumplenCondicion);
console.log(numeros);