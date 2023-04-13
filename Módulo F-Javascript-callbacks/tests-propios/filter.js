// Variación propia del ejercicio "callback / filter". Dado un array de strings. habrá una función "checkString" 
// que chequeará si hay caractres que no sean letras, en cuyo caso los mandará a la funcioón "correctString" para
//  que los quite, devolviendo una "stringCorregida". 
// Luego hará el filtrado de aquellos que empiecen cierta letra (pasada por parámetro a la función principal).
// Todo esto devolviendo verbosamente info sobre los pasos realizados.

// Función principal
function correctAndFilter(arrayOfStrings, cbCheckString, cbCorrectString, letterToFilter) {
   var letterToFilter = letterToFilter;
   console.log("A continuación las palabras como fueron ingresadas: ")
   console.log(arrayOfStrings);

   var arrayFinal = [];

   for (let i = 0; i < arrayOfStrings.length; i++) {
      var isCorrect = cbCheckString(arrayOfStrings[i]);
      var string = "";
      if (isCorrect === false) {
         string = cbCorrectString(arrayOfStrings[i]);
      } else {
         string = arrayOfStrings[i];
      }
      arrayFinal.push(string);
   }

   console.log(" ");
   console.log("A continuación todas las palabras (corregidas si aplica): ")
   console.log(arrayFinal);

   var arrayFiltrado = [];
   for (let i = 0; i < arrayFinal.length; i++) {
      if (arrayFinal[i][0] === letterToFilter) {
      arrayFiltrado.push(arrayFinal[i]);
      }
   }

   console.log(" ");
   console.log("A continuación las palabras que comienzan con la letra \'" + letterToFilter +  "\': ")
   console.log(arrayFiltrado);

 }

// Función callback 1
 function checkString(string) {
   var regex = /^[a-zA-Z]+$/; // all chars are letters
   if (regex.test(string)) {
      return true;
   } else {
      return false;
   }   
}

// Función callback 2
function correctString(string) {
   var tempArray = string.split('');
   var correctedArray = [];
   for (let i = 0; i < tempArray.length; i++) {
      var regex = /[a-zaA-Z]/;
      if (regex.test(tempArray[i])) { // 
         correctedArray.push(tempArray[i]);
      } 
   };
   
   var correctedString = correctedArray.join('');
   return correctedString
   
}

 
 var arraydePrueba = ["conejo", "casa", "bote", "pe#rr987!o", "cam8465844isa", "ballena", "l56at65465a"];
 correctAndFilter(arraydePrueba, checkString, correctString, "c");
