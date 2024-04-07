/* Задание 2
Текст задания
1. Напишите функцию getEvenNumbers, которая принимает массив
чисел в качестве аргумента и возвращает новый массив,
содержащий только четные числа.
2. Задача: Напишите функцию calculateAverage, которая принимает
массив чисел в качестве аргумента и возвращает среднее значение
этих чисел.
3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
качестве аргумента и возвращает новую строку, в которой первая
буква каждого слова является заглавной. */

//// task - 1 ////

let array1 = [1, 2, 3, 4, 6, 7, 8]

const getEvenNumbers = (num) => num.filter(item => item % 2 === 0);

console.log(getEvenNumbers(array1));

//// task - 2 ////

let array2 = [1, 0, 3, 4, 6, 5, 8]

function calculateAverage(num2) {
    const sum = num2.reduce((acc, item) => acc + item, 0)
    return sum / num2.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5]));

//// task - 3 ////

const capitalizeFirstLetter = (str) => {
    return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeFirstLetter('hello world')); // Helo World