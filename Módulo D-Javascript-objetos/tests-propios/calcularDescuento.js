//test (ejercicio del homework)
const storeItem = {
    precio: 80,
    porcentajeDeDescuento: 0.1,
 };
 const storeItem2 = {
    precio: 5,
    porcentajeDeDescuento: 0.5,
 };


function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8

   
   objetoProducto.calcularPrecioDescuento = function () {
    return this.precio - this.precio * this.porcentajeDeDescuento;
   }
   console.log("Precio: ");
   console.log(objetoProducto.precio);
   console.log("-----");
   console.log("Porcentaje de Descuento: ");
   console.log(objetoProducto.porcentajeDeDescuento);
   console.log("-----");
   console.log("Precio con Descuento: ");
   console.log(objetoProducto.calcularPrecioDescuento());
 };
 
 agregarMetodoCalculoDescuento(storeItem);