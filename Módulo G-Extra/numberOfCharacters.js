function numberOfCharacters(string) {
    // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
    // letras del string, y su valor es la cantidad de veces que se repite en el string.
    // Las letras deben estar en orden alfabético.
    // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    // Tu código:
    var array = string.split('');
    var objeto = {};
    var caracteresYaAgregados = [];
    // poblar "caracteresYaAgregados" con caracteres sin repetir
    for (let i = 0; i < array.length; i++) {
        if (!caracteresYaAgregados.includes(array[i])) caracteresYaAgregados.push(array[i]);
    }
    // ordenar caracteresYaAgregados;
    var caracteresOrdenados = caracteresYaAgregados.sort();


    console.log(caracteresOrdenados);
    // 2) [crear las claves desde caracteresYaAgregados] contar cuántas veces están esos caracteres en array e ir sumandolos al valor correspondiente del objeto
 }

 numberOfCharacters('canica');