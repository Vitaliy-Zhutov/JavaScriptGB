/* Задание 4 (Лексический контекст)
1. Напишите функцию createGreeting, которая принимает имя
пользователя и возвращает функцию, которая будет выводить
приветствие с использованием этого имени.
// Пример использования:
const greeting = createGreeting('John');
greeting(); // Ожидаемый результат: "Hello, John!". */

function createGreeting(name) {
    return function(hi) {
        console.log(`${name}, ${hi}`);
    }
}
const userName = createGreeting('Hello');
console.log(userName('John'));


//// Задача с ютуба

function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    
    function log() {
        let message = `Count is ${count}`;
        console.log(message);
    }
    return[increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

