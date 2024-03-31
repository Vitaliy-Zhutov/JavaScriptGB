/* Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9,
и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3. */

const randomArray = [];
let sumArray = 0;
let minArray;

for (let i = 0; i < 5; i++) {
    randomArray.push(Math.floor(Math.random() * (9 - 0 + 1) + 0));
    sumArray += randomArray[i];
    minArray = Math.min.apply(null, randomArray);
    if (randomArray[i] === 3) {
        console.log(`Число 3 есть в массиве`);
    }
}

console.log(randomArray);
console.log('Сумма элементов массива ' + sumArray);
console.log('Минимальное число в массиве ' + minArray);


