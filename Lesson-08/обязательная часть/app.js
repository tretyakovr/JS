'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function () {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function () {
    filterSizes.classList.toggle('hidden');
});

// Собственно, корзина товаров
let cart = [];
// Счетчик товаров в корзине
let itemsCount = 0;

// Некоторые элементы
let imgCart = document.querySelector('.cartIconWrap img');
let cartCounter = document.querySelector('.cartIconWrap span');
let cartContent = document.querySelector('.cartContent');
let cartData = cartContent.querySelector('.cartData');
let cartTotalSumm = document.querySelector('.totalSumm');

refreshCart();

// Найти все кнопки add_to_cart в featuredItems
let buttons = document.querySelectorAll('.featuredItems button');
buttons.forEach(function (button) {
    // Отловить событие click
    button.addEventListener('click', function (event) {
        // Получить название класса родительского контейнера
        let featuredItem = event.target.parentNode.parentNode.parentNode;

        // В нем найти название товара и цену
        let productName = featuredItem.querySelector('.featuredData .featuredName').textContent.trim();
        let productPrice = Number(featuredItem.querySelector('.featuredData .featuredPrice').textContent.trim().replace('$', ''));

        // и сохранить в корзину
        let isExists = false;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].name == productName) {
                cart[i].count += 1;
                cart[i].summ = Math.round(cart[i].count * cart[i].price * 100) / 100;
                itemsCount += 1;
                isExists = true;
                break;
            };
        };
        if (!isExists) {
            cart.push({ 'name': productName, 'count': 1, 'price': productPrice, 'summ': productPrice });
            itemsCount += 1;
        };

        // Обновить корзину
        refreshCart()
    });
});


imgCart.addEventListener('click', function (event) {
    cartContent.classList.toggle('displ');
});


function getCartTotalSumm() {
    let retval = 0;
    for (let i = 0; i < cart.length; i++) {
        retval += cart[i].summ;
    };
    return Math.round(retval * 100) / 100;
};


function refreshCart() {
    cartCounter.textContent = itemsCount;
    cartData.textContent = '';
    cartTotalSumm.textContent = 'Товаров в корзине на сумму: $' + getCartTotalSumm();

    for (let i = 0; i < cart.length; i++) {
        cartData.insertAdjacentHTML('beforeend',
            `
                <div>${cart[i].name}</div>
                <div class='alignRight'>${cart[i].count}</div>
                <div class='alignRight'>${cart[i].price}</div>
                <div class='alignRight'>${cart[i].summ}</div><br>
            `
        );
    };
};
