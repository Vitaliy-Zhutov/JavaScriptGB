/* Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, 
которая определяет максимальное значение среди этих чисел. */

let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));
let num3 = Number(prompt('Введите третье число'));

function maxNumber() {
    if (num1 > num2 && num1 > num3) {
        console.log('Максимальное число' + ' ' + num1);
    } else if (num1 < num2 && num2 > num3) {
        console.log('Максимальное число' + ' ' + num2);
    } else {
        console.log('Максимальное число' + ' ' + num3);
    }
}

maxNumber();