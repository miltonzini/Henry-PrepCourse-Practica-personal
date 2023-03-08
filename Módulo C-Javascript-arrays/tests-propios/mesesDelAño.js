// Consigna Original
// El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
// "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
// Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
// Tu código:

// Meses del Año: enfoque 1

var array = ["Enero", "Febrero", "Marzo", "Noviembre", "Diciembre"]; // test
function mesesDelAño(array) {
   if (array.includes("Enero") && array.includes("Marzo") && array.includes("Noviembre")) {
      var newArray = array.map(function (mes) {
         if (mes === "Enero" || mes === "Marzo" || mes === "Noviembre") {
            console.log(mes + " está en la lista")
            return mes;
         } else {
            console.log(mes + " no está en la lista");
         };
      });

      console.log(newArray);
      // TO DO: quitar los 'undefined' de newArray antes de retornar.
      // debería hacer otro for loop eliminándolos. Poco eficiente. 
      // probar otro approach
      return newArray;
   } else {
      console.log("No se encontraron los meses pedidos");
      return "No se encontraron los meses pedidos";
   };
   
}
mesesDelAño(array);