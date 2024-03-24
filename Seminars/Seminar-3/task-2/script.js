/* 1. Сделайте функцию, которая параметрами принимает 3 числа и
выводит в консоль сумму этих чисел. */

function sumOfThreeNumbers(param1, param2, param3) {
    return param1 + param2 + param3;
}

console.log(sumOfThreeNumbers(1, 2, 3));

// Залание 3

function func(num = 5) {
console.log(num * num);
}
func(2);
func(3);
func();