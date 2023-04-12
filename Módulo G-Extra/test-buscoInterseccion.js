function buscoInterseccion(array1, array2) {
    var newArray = [];
    for (let i = 0; i <= array1.length; i++) {
        if (array2.includes(array1[i])) newArray.push(array1[i]);
    }
    console.log(newArray);
 }

 var arregloDePrueba1 = [4, 2, 3];
 var arregloDePrueba2 = [1, 3, 4, 5, 2];
 
 buscoInterseccion(arregloDePrueba1, arregloDePrueba2);