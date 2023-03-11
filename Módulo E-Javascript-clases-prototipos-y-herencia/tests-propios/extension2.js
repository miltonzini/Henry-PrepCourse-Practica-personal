class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    saludar() {
        console.log('Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años de edad.')
    }
}

class Musico extends Persona {
    constructor(nombre, edad, academia, instrumento) {
        super(nombre, edad)
        this.academia = academia;
        this.instrumento = instrumento;
    }
    describirse() {
        console.log('Hola! me llamo ' + this.nombre + ', tengo ' + this.edad + ' años, y estudio ' + this.instrumento + ' en (el/la) ' + this.academia);
    }
}

var Persona1 = new Persona('Juan', 27);
Persona1.saludar();

var Musico1 = new Musico('Lucas', 32, 'Universidad Nacional de las Artes', 'Cello');
Musico1.describirse();