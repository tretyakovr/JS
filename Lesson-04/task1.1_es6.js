'use strict';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price -= this.price * 25 / 100;
    }
}

let prod1 = new Product('Товар1', 200);
prod1.make25PercentDiscount();

console.log(prod1);