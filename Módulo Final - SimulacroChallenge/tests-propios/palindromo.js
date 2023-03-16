function palindromo(palabra) {
  
    var array = palabra.split("");
    var arrayReverso = [];
    
    for (i = array.length - 1; i >= 0; i--) {
      arrayReverso.push(array[i]);
    }
    var palabraInvertida = arrayReverso.join('');
    

    if (palabraInvertida === palabra) {
        console.log("la palabra \"" + palabra + "\" es un palíndromo");
        return true;
    } else {
        console.log("la palabra \"" + palabra + "\" NO es un palíndromo");
        return false;
    }
  }

  palindromo("conejo");
  palindromo("neuquen");