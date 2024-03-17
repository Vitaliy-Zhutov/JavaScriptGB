// Задание 1.

let num = Number(prompt('Введите число'));

if (num > 5) {
    console.log(`Число ${num} больше 5`);
} else if (num === 5) {
    console.log(`Число ${num} равно 5`);
} else {
    console.log(`Число ${num} меньше 5`);
}

// Задание 2.

let test1 = Number(prompt('Введите первое число'));
let test2 = Number(prompt('Введите второе число'));

if (test1 === test2) {
    console.log(`Число ${test1} равно ${test2}`);
} else {
    console.log(`Число ${test1} не равно ${test2}`);
}

// Задание 3.

let test3 = Number(prompt('Введите первое число'));
let test4 = Number(prompt('Введите второе число'));

if (test3 > test4) {
    console.log(`Число ${test4} минимальное`);
} else {
    console.log(`Число ${test3} минимальное`);
}

// Задание 4.

let test5 = Number(prompt('Введите число'));

console.log((test5 < 15 && test5 > 0) ? `Число из нужного диапазона` 
: `Число не подходит`);