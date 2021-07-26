'use strict';

function isLess10(i) {
    if (i < 10) {
        console.log(i);
        return true;
    }
}

for (let i = 0; isLess10(i); i++) { }