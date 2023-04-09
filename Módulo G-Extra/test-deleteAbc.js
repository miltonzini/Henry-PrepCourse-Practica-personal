function deleteAbc(string) {
    // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
    // Retorna el string sin estas letras.
    // Tu código:
    var array = string.split('');
    var newArray = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] != "a" && array[i] != "b" && array[i] != "c") {
            newArray.push(array[i]);
        }
    }
    var newString = newArray.join('');
    console.log(newString);
 }

 deleteAbc("abracadabra"); // --> rdr
 deleteAbc("cabeza"); // --> ez