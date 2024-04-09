/* Напишите функцию createCounter, которая создает счетчик и возвращает объект 
с двумя методами: increment и decrement. Метод increment должен увеличивать 
значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. 
Значение счетчика должно быть доступно только через методы объекта, а не напрямую. */

const createCounter = () => {
    let count = 0;
    return {
       increment: () => ++count,
       decrement: () => --count,
    }
 }
 const counter1 = createCounter();
 console.log(counter1.increment());
 console.log(counter1.increment());
 
 const counter2 = createCounter();
 console.log(counter2.decrement());
 console.log(counter2.decrement());
