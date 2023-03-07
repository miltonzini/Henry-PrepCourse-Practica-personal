console.log(4 < 7);
console.log(4 < 1);
console.log(4 < 4);
console.log(4 == 7);

3 == 3; // true
3 === 3; // true
3 == '3'; // true
3 === '3'; // false



// # Asociatividad
// asociatividad a la derecha (de derecha a izquierda)
var a = 1;
var b = 2;
var c = a = b;
console.log(a); // 2
console.log(b); // 2
console.log(c); // 2

// asociatividad a la izquierda (de izquierda a derecha)
console.log(16 / 2 / 4); 