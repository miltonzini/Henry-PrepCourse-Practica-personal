// Variación propia del ejercicio "callback / filter". Dado un array de strings. habrá una función "checkString" 
// que chequeará si hay caractres que no sean letras, en cuyo caso los mandará a la funcioón "correctString" para
//  que los quite, devolviendo una "stringCorregida". 
// Luego hará el filtrado de aquellos que empiecen con la letra "c".

function checkString() {
   // temp
   console.log("pasó por checkString");
}

function correctString() {
   // temp
   console.log("pasó por correctString");
}

function correctAndFilter(arrayOfStrings, cbCheckString, cbCorrecString) {
    var arrayFinal = [];
 
    for (let i = 0; i < arrayOfStrings.length; i++) {
       if (arrayOfStrings[i][0] === "c") {
         arrayFinal.push(arrayOfStrings[i]);
       }
    }

    console.log(arrayFinal);
 }

 
 var arraydePrueba = ["conejo", "casa", "bote", "stringmal34escrita", "cam8465844isa"];
 correctAndFilter(arraydePrueba, checkString, correctString);
 
 