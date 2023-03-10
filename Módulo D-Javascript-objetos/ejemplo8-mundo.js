var mundo = {
    continentes: 7, 
    paises: 195, 
    oceanos: 5,
}
for(var prop in mundo) {
    console.log("Esta es la propiedad: " + prop);
    console.log("Este es el valor: " + mundo[prop]);
};