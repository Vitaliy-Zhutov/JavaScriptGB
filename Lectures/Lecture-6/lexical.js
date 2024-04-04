// const houses = [];

// let i = 0;
// while (i < 10) {
//     let house = function () { // функция "дом" 
//         console.log(i); // выводит номер дома
//     };
//     houses.push(house);
//     i++;
// }

// houses[0](); // 10 - у нулевого дома номер 10 почему?
// houses[7](); // 10 - и у седьмого дома номер 10 почему?


// //////

// let house = function () { // функция дом
//     // лексическое окружение: { i: 10}
//     console.log(i); // выводит номер дома
// }

//////

// const houses = [];

// let i = 0;
// while (i < 10) {
//     let houseNumber = i; /* Здесь создаем блочную переменную, которая сохранит значение i
//     для конкретной итерации цикла, и именно ее значение попадет в лексическое окружение
//     функции house */
//     let house = function () { // функция "дом"
//         console.log(houseNumber); // выводит номер дома
//     };
//     houses.push(house);
//     i++;
// }

// houses[0](); // 0 - у нулевого дома номер 0
// houses[7](); // 7 - у седьмого дома номер 7

////////

// const houses = [];

// let i = 0;
// while (i < 10) {
//     let house = function () { // функция "дом"
//         let houseNumber = i; /* Здесь создаем блочную переменную, которая сохранит значение i,
//         и именно ее значение попадет в лексическое окружение функции house */
//         console.log(houseNumber); // выводит номер дома
//     };
//     houses.push(house);
//     i++;
// }

// houses[0](); // 0 - у нулевого дома номер 0
// houses[7](); // 7 - и у седьмого дома номер 7

/////////////////

// Нахождение факториала через рекурсию
/* 
n! = (n - 1)! * n
4! = 6 * 4; - 24
3! = 2 * 3; - 6
2! = 1 * 2; - 2
1! = 1;
*/

function factorial(number) {
    if (number === 1) {
        return 1;
    }
    return factorial(number - 1) * number
}
console.log(factorial(3));


