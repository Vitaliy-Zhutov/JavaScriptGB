/* Задание 1
Напишите функцию getPrototypeChain(obj), которая будет
возвращать цепочку прототипов для заданного объекта
obj. Функция должна вернуть массив прототипов, начиная
от самого объекта и заканчивая глобальным объектом
Object.prototype. */

const MusicSeries = {
    model: "music stries",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    startWipe() {
        console.log('I am the method of MusicSeries');
        console.log('I am starting to wipe the floor...');
    },
};

const Blues = {
    model: "Bluees-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
};

Object.setPrototypeOf(Blues, MusicSeries);

function getPrototypeChain(obj) {
    const prototypeChain = [];
    let currentObj = obj;

    while (currentObj !== null) {
        prototypeChain.push(currentObj);
        currentObj = Object.getPrototypeOf(currentObj);
    }
    return prototypeChain;
}

const prototypeChain = getPrototypeChain(Blues);
console.log(prototypeChain);