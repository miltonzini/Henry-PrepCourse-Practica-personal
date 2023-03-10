class Persona {
    constructor (nombre, apellido, edad, genero) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.genero = genero;
    }
    
    descripcion() {
        console.log(this.nombre + " " + this.apellido + " tiene " + this.edad + " años.")
    }
    añosParaJubilarse() {
        if (this.genero === 'M') {
            console.log("A " + this.nombre + " " + this.apellido + " le faltan " + (65 - this.edad) + " años para jubilarse.");
        } else if (this.genero === 'F') {
            console.log("A " + this.nombre + " " + this.apellido + " le faltan " + (60 - this.edad) + " años para jubilarse.");
        } else {
            console.log("No sabemos el género de " + this.nombre + " " + this.apellido + " así que no podemos calcular su edad de jubilación.");
        };
    }
}

var Persona1 = new Persona ('María', 'López', 30, 'F');
var Persona2 = new Persona ('Marta', 'Gómez', 59, 'F');
var Persona3 = new Persona ('Ana', 'Dominguez', 40, 'X');
var Persona4 = new Persona ('Marcos', 'Tejada', 63, 'M');
var Persona5 = new Persona ('Lucas', 'Galpero', 62, 'M');

Persona1.descripcion();
Persona1.añosParaJubilarse();
console.log(" ");

Persona2.descripcion();
Persona2.añosParaJubilarse();
console.log(" ");

Persona3.descripcion();
Persona3.añosParaJubilarse();
console.log(" ");

Persona4.descripcion();
Persona4.añosParaJubilarse();
console.log(" ");

Persona5.descripcion();
Persona5.añosParaJubilarse();
console.log(" ");