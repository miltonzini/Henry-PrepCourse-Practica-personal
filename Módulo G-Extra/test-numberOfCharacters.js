function numberOfCharacters(string) {
    // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
    // letras del string, y su valor es la cantidad de veces que se repite en el string.
    // Las letras deben estar en orden alfabético.
    // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    // Tu código:
    var array = string.split('');
    var objeto = {};
    var caracteresSinRepetir = [];
    for (let i = 0; i < array.length; i++) {
        if (!caracteresSinRepetir.includes(array[i])) caracteresSinRepetir.push(array[i]);
    }
    var caracteresOrdenados = caracteresSinRepetir.sort();
    for (let i = 0; i < caracteresOrdenados.length; i++) {
        var suma = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[j] === caracteresOrdenados[i]) suma++;
        };
        objeto[caracteresOrdenados[i]] = suma;
    };
    console.log(objeto);
 }

 var palabraDePrueba = "neurofibromatosis";

 numberOfCharacters(palabraDePrueba);
