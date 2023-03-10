var libro = {
    autor: 'Borges',
    genero: 'policial',
    año: 1990
}

var tieneXPropiedad = libro.hasOwnProperty('año') // evalúa si hay una key llamada año
console.log(tieneXPropiedad); 
 
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades); // guarda en un array todas las propiedades del objeto.