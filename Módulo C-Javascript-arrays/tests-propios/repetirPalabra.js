// poblar y devolver un array que contenga la palabra miPalabra n veces
// variación del ejemplo dado donde se repetía 5 veces la palabra 'BOOM'.
// 

function repetirPalabra (miPalabra, repeticiones) {
    var arr = [];
    while (arr.length < repeticiones) {
       arr.push(miPalabra);
 };
 console.log(arr);
 return arr;
 }
 
 repetirPalabra('casa', 16);