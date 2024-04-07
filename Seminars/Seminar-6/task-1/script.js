/* Задание 1
1. Создайте функцию mergeArrays, которая принимает два
массива и возвращает новый массив, содержащий все
элементы из обоих массивов. Используйте spread
оператор для объединения массивов.
mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
2, 3, 4, 5, 6]
2. Создайте функцию removeDuplicates, которая принимает
любое количество аргументов и возвращает новый
массив, содержащий только уникальные значения.
Используйте rest оператор для сбора всех аргументов в
массив а затем filter для определения дубликатов.
removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
результат: [1, 2, 3, 4, 5]. */

//// task - 1 ////

let array1 = [2, 2, 3]
let array2 = [4, 5, 6]

// function mergeArrays(arr1, arr2) {
//     return [...arr1, ...arr2]
// }

const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

console.log(mergeArrays(array1, array2));

//// task - 2 ////

function removeDuplicates(...argum) {
    return argum.filter((value, index) => argum.indexOf(value) === index);
}
console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));