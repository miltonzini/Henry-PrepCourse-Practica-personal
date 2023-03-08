// EjemploMalEscrita 5
var palabraMalEscrita = "Henri"
console.log(palabraMalEscrita);
var palabraSeparada = palabraMalEscrita.split('');
palabraSeparada.pop();
palabraSeparada.push('y');
console.log(palabraSeparada);
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);