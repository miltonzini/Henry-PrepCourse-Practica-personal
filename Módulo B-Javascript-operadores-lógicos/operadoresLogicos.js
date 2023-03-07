console.log('## mayorYMenorYPar');
function mayorYMenorYPar(num) {
    if (num > 5 && num < 10 && num % 2 === 0)console.log(true);
    else console.log(false);
};

mayorYMenorYPar(7);
mayorYMenorYPar(8);



console.log(' ');
console.log('## operadorOr');
function operadorOr(str) {
    if(str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false);
};

operadorOr('Henry');
operadorOr('Javascript');
operadorOr('H');



console.log(' ');
console.log('## Negación');
function negacion(permiso) {
    if(permiso !== false) console.log('tiene permiso'); // si permiso no es false, etc.
    else console.log('no tiene permiso');
};

negacion(true);
negacion(false);


console.log(' ');
console.log('## Condición Compleja');
function condicionCompleja(num) {
    if(num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
};

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);
condicionCompleja(11);