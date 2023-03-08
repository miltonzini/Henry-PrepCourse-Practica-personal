// Consigna Original
// El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
// "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
// Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
// Tu código:

// Meses del Año: enfoque 2
var array = ["Enero", "Febrero", "Marzo", "Noviembre", "Diciembre"];
function mesesDelAño(array) {
   var newArray = [];
   if (array.includes("Enero") && array.includes("Marzo") && array.includes("Noviembre")) {
      for (let i = 0; i < array.length; i++) {
         if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
            newArray.push(array[i]);
         };
      };
      console.log(newArray);
      return newArray;
   } else {
      console.log("No se encontraron los meses pedidos");
      return "No se encontraron los meses pedidos";
   };
};
mesesDelAño(array);