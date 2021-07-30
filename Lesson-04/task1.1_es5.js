'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
};

Product.prototype.make25PercentDiscount = function () {
    this.price -= this.price * 25 / 100;
}

let prod1 = new Product('Товар1', 100);
prod1.make25PercentDiscount();

console.log(prod1);