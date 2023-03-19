var productos = [{
      price: 100,
      name: 'tv'
    }, {
      price: 50,
      name: 'phone'
    }, {
      price: 30,
      name: 'lamp'
    }, {
      price: 27,
      name: 'glass'
}];


Array.prototype.filtrar = function(cb) {
    var filteredArray = [];

    for (let i = 0; i < this.length; i++) {
        price = this[i].price;
        if (cb(this[i])) filteredArray.push(this[i]);
    }
    console.log(filteredArray);
    return filteredArray;
}

  
productos.filtrar(function(){
    if (price > 30 || price === 27) {
        return true;
    } else {
        return false;
    }
});