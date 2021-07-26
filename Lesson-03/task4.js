const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let productsWithPhotos = products.filter(function (product) {
    if ('photos' in product && product.photos.length > 0) {
        return product;
    }
});

console.log(productsWithPhotos);

let productsSortedByPrice = products.sort(function (a, b) {
    return a.price - b.price;
})

console.log(productsSortedByPrice)
