let miObjeto = {
    nombre: "pepe",
    altura: 5,
    peso: 60
}
let propiedad = "peso";

function muestraPeso(objeto, propiedad) {
    // si conozco el nombre exacto de la propiedad
    // estos dos son equivalentes:
    console.log(objeto["peso"]);
    console.log(objeto.peso);

    // si no conozco el nombre de la prop:
    console.log(objeto[propiedad])
}
muestraPeso(miObjeto, propiedad);