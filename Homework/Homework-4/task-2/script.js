/* Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]. */

const array = [1, 2, 3, 4, 5, 6, 7];

const array2 = array.splice(3, 2);

console.log(array2);
console.log(array);
