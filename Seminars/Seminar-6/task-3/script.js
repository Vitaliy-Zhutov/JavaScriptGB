/* Задание 3 (Замыкания)
1. Напишите функцию createCalculator, которая принимает начальное
значение и возвращает объект с двумя методами: add и subtract.
Метод add должен увеличивать значение на переданное число, а
метод subtract должен уменьшать значение на переданное число.
Значение должно быть доступно только через методы объекта, а не
напрямую. */

function createCalculator(initialValue) {
    let value = initialValue;
    return {
        add: function(num) {
            value += num;
        },
        subtract: function(num) {
            value -= num;
        },
        getValue: function() {
            return value;
        }
    }
}

const calculator = createCalculator(10);
calculator.add(5);
calculator.subtract(3);
console.log(calculator.getValue());

/// Пример замыкания с ютуба

function urlGtnerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}
const comUrl = urlGtnerator('com');
console.log(comUrl('google'));

const ruUrl = urlGtnerator('ru');
console.log(ruUrl('yandex'));

// Еще один пример с ютуба

/* Написать свою функцию bind
пример работы:
function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job})
}
const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
const person2 = {name: 'Елена', age: 22, job: 'SMM'}
bind(person1, logPerson)
bind(person2, logPerson)
*/

function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
const person2 = {name: 'Елена', age: 22, job: 'SMM'}

bind(person1, logPerson)();
bind(person2, logPerson)();