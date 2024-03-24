// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = Number(prompt('Введите первое число'));

if (num1 === 1) {
    console.log(`Число ${num1} равно 1`);
} else if (num1 < 1) {
    console.log(`Число ${num1} меньше 1`);
} else {
    console.log(`Число ${num1} больше 1`);
}

let num2 = Number(prompt('Введите второе число'));

if (num2 === 3) {
    console.log(`Число ${num2} равно 3`);
} else if (num2 > 3) {
    console.log(`Число ${num2} больше 3`);
} else {
    console.log(`Число ${num2} меньше 3`);
}