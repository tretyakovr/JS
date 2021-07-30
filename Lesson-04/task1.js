'use strict';

function numToObject(s) {

    let retval = {};

    if (isNaN(s)) {
        console.log(`Ошибка! ${s} - не является числом!`)
        return retval;
    }

    let n = Number(s);
    if (n < 0 || n > 999) {
        console.log(`Ошибка! ${s} вне диапазона [0, 999]`);
        return retval;
    }

    retval = {
        units: n % 10,
        tens: Math.trunc(n % 100 / 10),
        hundreds: Math.trunc(n / 100),
    }

    return retval;
}


let s = prompt('Введите целое число в дипапзоне [0, 999]');
console.log(numToObject(s));
