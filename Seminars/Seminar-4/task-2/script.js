/*Задание 2
1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++
увеличьте каждый элемент массива на единицу.
2. Узнайте длину следующего массива:
const arr = [];
arr[3] = 'a';
arr[8] = 'b';
3. Пусть дан такой массив:
const arr = [1, 2, 3];
Добавьте ему в конец элементы 4 и 5.
4. Создайте произвольный массив из 5 элементов, Удалите из него два
элемента. Проверьте, какое станет значение свойства length после
этого.*/

//////////task-1/////////////////////

const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    console.log(++element);
}
console.log('////////////////////');

//////////task-2/////////////////////

const arr2 = [];

arr2[3] = 'a';
arr2[8] = 'b';

for (let i = 0; i < arr2.length; i++) {
    const element2 = arr2[i];
    console.log(arr2.length);
}
console.log(arr2);
console.log('////////////////////');

//////////task-3/////////////////////

const arr3 = [1, 2, 3];

arr3.push(4);
arr3.push(5);

console.log(arr3);
console.log('////////////////////');

//////////task-4/////////////////////

const array = [2, 3, 5, 6, 8];

array.splice(0, 2);

console.log(array);
console.log(array.length);