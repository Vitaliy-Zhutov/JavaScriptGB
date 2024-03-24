/* 1. Написать функцию, которой передаем, имя, фамилия и
возраст, и получаем строку "Привет Иван Петров с
возрастом 17" (только здесь данные, которые были
переданы в функцию) */

initials = prompt('Введите ваши ФИО')
age = Number(prompt('Введите ваш возраст'));


function initialsAndAge (initials, age) {
    initials = prompt('Введите ваши ФИО')
    age = Number(prompt('Введите ваш возраст'));
    console.log(`Привет ${initials} с возрастом ${age}`);
}

initialsAndAge();

/* 2. Создайте функцию которая возводит переданное число в
квадрат */

let num = Number(prompt('Введите любое цеое число'));

const squareOfTheNumber = () => {
    return num ** 2;
}

console.log(squareOfTheNumber());


/* 3. Сделайте функцию, которая параметром принимает
число и проверяет, положительное это число или
отрицательное. В первом случае пусть функция выводит
в консоль текст '+++', а во втором '---'.*/

let num2 = Number(prompt('Введите любое число'));

function checkingTheNumber() {
    if (num2 >= 0) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

checkingTheNumber();