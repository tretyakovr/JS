let a = 2; // a = 2, x = undefined
let x = 1 + (a *= 2); // a = 4, x = 5. Сначала a умножается на 2 и полученное значение присваивается переменной a 
// (у операции группировки наивысший приоритет)
// Затем x = 1 + 4 = 5
