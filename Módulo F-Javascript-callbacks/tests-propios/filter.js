// Variación propia del ejercicio "callback / filter". Dado un array de strings. habrá una función "checkString" 
// que chequeará si hay caractres que no sean letras, en cuyo caso los mandará a la funcioón "correctString" para
//  que los quite, devolviendo una "stringCorregida". 
// Luego hará el filtrado de aquellos que empiecen con la letra "c".

function checkString(string) {
   // temp
   //console.log("pasó por checkString");
   var regex = /^[a-zA-Z]+$/; // all chars are letters
   if (regex.test(string)) {
      return true;
   } else {
      console.log(string + " contiene otros caracteres"); // temp
      return false;
   }   
}

function correctString(string) { // SEGUIR TRABAJANDO
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

function correctAndFilter(arrayOfStrings, cbCheckString, cbCorrecString) {
    var arrayFinal = [];

   for (let i = 0; i < arrayOfStrings.length; i++) {
      var isCorrect = checkString(arrayOfStrings[i]);
      var string = "";
      if (isCorrect === false) {
         string = correctString(arrayOfStrings[i]);
         console.log(string);
      }
   
   }
   // console.log("test asd");
   // for (let i = 0; i < arrayOfStrings.length; i++) {
   //    if (arrayOfStrings[i][0] === "c") {
   //    arrayFinal.push(arrayOfStrings[i]);
   //    }
   // }

    console.log(arrayFinal);
 }

 
 var arraydePrueba = ["conejo", "casa", "bote", "stringmal34escrita", "cam8465844isa"];
 correctAndFilter(arraydePrueba, checkString, correctString);
 
 