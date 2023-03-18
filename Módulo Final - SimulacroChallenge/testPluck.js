var arrayEjemplo = [
    objetoA = {
        nombre: "nombreA",
        edad: 18,
        codigo: "1365-432",
    }, 
    objetoB = {
        nombre: "nombreB",
        edad: 32,
        codigo: "1365-433",
    }, 
    objetoC = {
        nombre: "nombreC",
        edad: 19,
        codigo: "1365-434",
    }, 
]

//var propiedad = nombre;



function pluck(array, propiedad) {
    // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
    // propiedad.
    // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
    // Ej:
    // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
    // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
    // Pista: es una buena oportunidad para usar map.
  
    // Tu código acá:
    var newArray = array.map((obj) => {
        return obj[propiedad];
    })
    console.log(newArray);
  
  }

  pluck(arrayEjemplo, "codigo")