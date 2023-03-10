class Conejo {
    constructor (edad, nombre, cantidadDeOrejas, pais) {
        this.nombre = nombre;
        this.edad = edad;
        this.cantidadDeOrejas = cantidadDeOrejas;
        this.pais = pais;
    }
    descripcion() {
        console.log("Este conejo se llama " + this.nombre + ", tiene " + this.edad + " años, cuenta con " + this.cantidadDeOrejas + " orejas y nació en " + this.pais + ".");
    }
}

var Conejo1 = new Conejo (2, 'Carlos', 2, 'Australia');
var Conejo2 = new Conejo (7, 'Lucas', 3, 'Brasil');
var Conejo3 = new Conejo (3, 'Marcos', 2, 'Rusia');
var Conejo4 = new Conejo (4, 'Luis', 5, 'Argentina');

Conejo1.descripcion();
Conejo2.descripcion();
Conejo3.descripcion();
Conejo4.descripcion();