// Обращение к свойствам объекта
console.log(Roomba.model); // Roomba-1
console.log(Roomba.isFull); // false

/* Вызов метода объекта через call с явной передачей объекта робота-пылесоса
в качестве контекста */
Roomba.startCleaning.call(Roomba); // I am cleaning... I have been started: 3 times.
/* Этот пример не показателен, т.к. мы и так имели доступ к объекту, а внутри
setTimeout использоваать call возможно только обернув все это в анонимную
функцию, то тоже бессмысленно, потому что тогда мы снова имеем доступ к
объекту, как видели в прошлом примере. Но мы можем передать call другой объект
и увидеть что функция вызывается в контексте другого объекта. */

/* Создадим фиктивный объект робота, который содержит только одно свойство,
необходимое для работы функции и сразу же зададим ему первоначальное значение,
отличное от того, которое задано у робота, для наглядности. */
const notARobot = {
    counterOfStarts: 10,
};

Roomba.startCleaning.call(notARobot); // I am cleaning... I have been started:  11 times.

////

/* Подобно методу call можно использовать метод apply, который также позволяет вызвать
функцию и передать необходимый контекст, единственным отличием от call, метод apply принимает
аргументы, которые необходимо передать в вызываемую функцию не списком через запятую,
а в виде массива, что порой удобнее. */

// const notARobot2 = {
//     counterOfStarts: 10,
// };
// Пример использования метода apply, с передачей аргументов arg1, arg2, arg3.
// Roomba.startCleaning.apply(notARobot2, [arg, arg1, arg2]);

////

console.log(Roomba.model); // Roomba-1
console.log(Roomba.isFull); // false

/* В setTimeout мы передаем наш метод, а функцию, которая привязана к объекту.
Метод bind возвращает новую функцию, уже привязанным контекстом, именно она
вызывается пр истечении времени */
setTimeout(Roomba.startCleaning.bind(Roomba), 1000);

Roomba.isUVLampOn = true;

setTimeout(Roomba.switchUVLamp.bind(Roomba), 2000);
setTimeout(Roomba.goCharge.bind(Roomba), 3000);
