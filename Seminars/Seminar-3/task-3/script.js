/* 1. Сделайте функцию, которая параметром принимает число, а
возвращает квадратный корень из этого числа. С помощью этой
функции найдите корень числа 3, затем найдите корень числа 4.
Просуммируйте полученные результаты и выведите их в консоль. */

function squareOfTheNumber(num) {
    return Math.sqrt(num);
}

console.log(Math.round(squareOfTheNumber(3) + squareOfTheNumber(4)));


/* 2. Создайте функцию, которая находит минимальное число из 2х
передаваемых аргументов функции */

function minimumNumber(num1, num2) {
    if (num1 < num2) {
        console.log(`Минимальное число ${num1}`);
    } else {
        console.log(`Минимальное число ${num2}`);
    }
}

minimumNumber(5, 3);