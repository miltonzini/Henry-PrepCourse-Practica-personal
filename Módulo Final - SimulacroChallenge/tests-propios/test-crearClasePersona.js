

class Persona {
    constructor(nombre, edad, hobbies, amigos) {
    // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
    // Inicializar las propiedades de la persona con los valores recibidos como argumento

    this.nombre = nombre;
    this.edad = edad;
    this.hobbies = hobbies;
    this.amigos = amigos;

    }

    addFriend(nombre, edad) {
        var nuevoAmigo = {
            nombre: nombre,
            edad: edad,
        }
        this.amigos.push(nuevoAmigo);
    }

    addHobby(hobby) {
        this.hobbies.push(hobby);

    }
    getFriends() {
        var newArray = this.amigos.map ((friend) => {return friend.nombre});
        console.log(newArray);
        return newArray;
    }

    getHobbies() {
    // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
    // Ej:
    // persona.getHobbies() debe devolver ['correr', 'dormir', 'nadar']

    // Tu código aca:

    }

    getPromedioEdad() {
    // El método 'getPromedioEdad' debe retornar el promedio de edad de los amigos de una persona
    // Ej:
    // Si la persona tuviera estos amigos:
    // {
    //   amigos: [{
    //     nombre: 'toni',
    //     edad: 33,
    //   }, {
    //     nombre: 'Emi',
    //     edad: 25
    //   }]
    // }
    // persona.getPromedioEdad() debería devolver 29 ya que (33 + 25) / 2 = 29

    // Tu código aca:

    }
};


var carlos = new Persona(
    "Carlos", 
    40, 
    ["correr", "leer"], 
    [{nombre: "Esteban", edad: 42}, {nombre: "Lucas", edad: 38}]
    );

carlos.addFriend("Franco", 45);
carlos.addFriend("Ana", 41);

carlos.addHobby("cocinar");

carlos.getFriends();
//console.log(carlos);
