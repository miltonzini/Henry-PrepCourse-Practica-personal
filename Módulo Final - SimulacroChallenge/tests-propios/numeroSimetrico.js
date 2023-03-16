function numeroSimetrico(num) {
  
    var numCopy = num.toString();
    var reverso = numCopy.split("").reverse().join('');

    console.log("num es: " + typeof(num)); // test
    console.log("numCopy es: " + typeof(numCopy)); // test
    console.log("reverso es: " + typeof(reverso)); // test
    console.log(" "); // test
    
    if (numCopy === reverso) {
        console.log("El número " + num + " es simétrico");
        return true;
    } else {
        console.log("El número " + num + " NO es simétrico");
        return false;
    }    
  }

  numeroSimetrico(1234321);
