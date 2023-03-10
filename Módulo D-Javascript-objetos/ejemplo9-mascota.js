var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueña: 'Juana Pérez',
    info: function () {
        console.log("Mi perro es un " + this.raza) // "this" indica contexto
    },
}

mascota.info();