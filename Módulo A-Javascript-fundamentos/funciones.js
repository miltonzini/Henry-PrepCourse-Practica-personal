// Diferentes formas de declarar una función

// Primera
function sumaTres(x) {
    return x + 3;
}
sumaTres(2);

// Segunda [la declaro guardándola en una variable]
var sumaCuatro = function(x) {
    return x + 4;
};
sumaCuatro(2);

// Tercera ["función de flecha"]
var sumaCinco = (x) => {
    return x + 5;
};
sumaCinco(2);



// Ejemplo de Función Flecha (es una forma de abreviar la sintaxis "clásica").

var numeros = [1, 6, 8, 9];
// esto (arrow) ...
var cumplenCondicionA = numeros.every((num) => {
     return num > 5;
});
console.log(cumplenCondicionA);

// ... es lo mismo que:
var cumplenCondicionB = numeros.every(
    function(num){
        return num > 5;
    });
console.log(cumplenCondicionB);