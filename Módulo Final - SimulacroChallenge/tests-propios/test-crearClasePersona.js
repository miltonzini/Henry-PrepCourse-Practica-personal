

class Persona {
    constructor(nombre, edad, hobbies, amigos) {
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
        console.log(this.hobbies);
    }

    getPromedioEdad() {
        var cantidadAmigos = this.amigos.length;
        var sumaEdades = 0;
        for (var i = 0; i < this.amigos.length; i++) {
            sumaEdades += this.amigos[i].edad;
        }
        var promedioEdades = sumaEdades / cantidadAmigos;
        console.log(promedioEdades);
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
carlos.addHobby("viajar");
carlos.addHobby("escribir");

carlos.getFriends();
carlos.getHobbies();

carlos.getPromedioEdad();
