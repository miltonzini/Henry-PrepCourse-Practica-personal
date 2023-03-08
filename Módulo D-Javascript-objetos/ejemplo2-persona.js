// Un objeto puede contener otro objeto: 
var persona = {
    nombre: 'Lucas',
    edad: 26,
    estudios: {esProgramador: true}, 
};


// dot notation: para acceder a una propiedad (igual a C)
console.log(persona);
console.log(persona.edad);

persona.nombre = 'Martin'; // modificar propiedad
console.log(persona.nombre);

console.log(persona.estudios);