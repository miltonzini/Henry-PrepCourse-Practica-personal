// Creamos un método que agrega un país al array países (propiedad de la clase Continente) 
class Continente {
    constructor() {
        this.paises = [];
    }
}

Continente.prototype.agregarPais = function(pais) {
    this.paises.push(pais);
}; // inventé el método "agregarPais" y ahora puedo usarlo en cualquier objeto de la clase "Continente".

var latinoamerica = new Continente();
latinoamerica.agregarPais('Mexico');
latinoamerica.agregarPais('Perú');
latinoamerica.agregarPais('Argentina');
latinoamerica.agregarPais('Chile');
console.log(latinoamerica.paises);

var europa = new Continente();
europa.agregarPais('Francia');
europa.agregarPais('Italia');
europa.agregarPais('Reino Unido');
europa.agregarPais('Alemania');
console.log(europa.paises);