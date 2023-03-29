function capToFront(string) {
    // Recibes un string con algunas letras en mayúscula y otras en minúscula.
    // Debes enviar todas las letras en mayúscula al comienzo del string.
    // Retornar el string.
    // [EJEMPLO]: soyHENRY ---> HENRYsoy
    // Tu código
    var array = string.split('');
    var mayusculas = array.filter(letra => (letra.toUpperCase() === letra));
    var minusculas = array.filter(letra => (letra.toUpperCase() !== letra));
    
    var nuevoArray = mayusculas.join('') + minusculas.join('');
    console.log(nuevoArray);

 }

 capToFront('aAeiFonCZXCasd'); // --> 'AFCZXCaeionasd'
 capToFront('osSdaEodgNdfCjhIgdLjgLoiOuweSnrTowUnoDIspnOvkp'); // --> 'SENCILLOSTUDIOosdaodgdfjhgdjgoiuwenrownospnvkp'
 