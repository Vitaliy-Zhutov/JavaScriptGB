/*

// Класс робот-пылесос.
class RobotVacuumCleaner {
    // Свойства класса.
    model = "Roomba-1";
    power = 200;
    batterySize = 2100;
    boxSize = 0.5;
    workTime = 45;
    counterOfStarts = 0;
    isFull = false;
    isObstracle = false;
    isUVLampOn = false;

    // Конструктор класса, подробнее в следующем уроке.
    constructor() {
    }

    // Метод класса.
    startCleaning() {
        this.counterOfStarts++;
        console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    }

    goCharge() {
        console.log('I am going to charge...');
    }

    switchUVLamp() {
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}`);
    }
}

const Roomba = new RobotVacuumCleaner();

////

// Обращение к свойствам объекта.
console.log(Roomba.model); // Roomba-1
console.log(Roomba.isFull); // false

// Отложенный вызов методов объекта.
setTimeout(Roomba.startCleaning, 1000); // I am cleaning... I have been started:  NaN times.

Roomba.isUVLampOn = true;

setTimeout(Roomba.switchUVLamp, 2000); // UV lamp is working
setTimeout(Roomba.goCharge, 3000); // I am going to charge...

*/

//// Вариант два, правильный!

class RobotVacuumCleaner {
    // Свойства класса.
    model = "Roomba-1";
    power = 200;
    batterySize = 2100;
    boxSize = 0.5;
    workTime = 45;
    counterOfStarts = 0;
    isFull = false;
    isObstracle = false;
    isUVLampOn = false;

    /* Используем его, чтобы привязать все методы класса к контексту - текущему
    объекту (this) */
    constructor() {
        this.startCleaning = this.startCleaning.bind(this);
        this.goCharge = this.goCharge.bind(this);
        this.switchUVLamp = this.switchUVLamp.bind(this);
    }

    // Методы класса.
    startCleaning() {
        this.counterOfStarts++;
        console.log('I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
    }

    goCharge() {
        console.log('I am going to charge...');
    }

    switchUVLamp() {
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' : 'not working'}`);
    }
}

// Создаем экземпляр класса.
const Roomba = new RobotVacuumCleaner();

// Обращение к свойствам объекта.
console.log(Roomba.model); // Roomba-1
console.log(Roomba.isFull); // false

// Отложенный вызов методов объекта.
setTimeout(Roomba.startCleaning, 1000); // I am cleaning... I have been started:  1 times.

Roomba.isUVLampOn = true;

setTimeout(Roomba.switchUVLamp, 2000); // UV lamp is working
setTimeout(Roomba.goCharge, 3000); // I am going to charge...


/* !!!Стрелочная функция работает !без конструктора!, все то же самое только меняем 
классические функции на стрелочные */