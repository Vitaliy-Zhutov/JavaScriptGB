/* Задание 1
Создайте функцию которая возводит переданное число в куб, 
необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени. */

function cubingNumber(num) {
    return Math.pow(num, 3);
}

console.log(cubingNumber(2) + cubingNumber(3));