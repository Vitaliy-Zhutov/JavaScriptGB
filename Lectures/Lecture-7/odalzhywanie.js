/* Объект Roomba - робот-пылесос. Код самого объекта в листе robot.*/

// Объект робот-пылесос модель Tango.
const Tango = {
    model: "Tango-1",
    power: 300,
    batterySize: 3200,
    boxSize: 0.7,
    workTime: 60,
    counterOfStarts: 0,
    isFull: false,
    isObstracle: false,
    isUVLampOn: false,

    /* После свойств объявляют методы. А так как методы у новой модели такие же
    как и у старой, давайте позаимствуем их у объекта Roomba. */
    startCleaning: Roomba.startCleaning,
    goCharge: Roomba.goCharge,
    switchUVLamp: Roomba.switchUVLamp,
};

////

// Обращаемся к свойствам объекта Tango.
console.log(Tango.model); // Tango-1
console.log(Tango.isFull); // false

// Вызов методов объекта.
Tango.startCleaning(); // I am cleaning... I have been started:  1 times.

// Установим свойства оъекта isUVLampOn в true, чтобы продемонстрировать результат
// работы метода switchUVLamp.
Tango.isUVLampOn = true;

/* Результат вызова следующего метода зависит от значения, хранящегося в свойстве
объекта, а также от того как этот метод был вызван (об этом поговорим чуть ниже). */
Tango.switchUVLamp(); // UV lamp is not working

Tango.goCharge(); // I am going to charge...

////

const Samba = {
    model: "Samba-1",
    power: 250,
    batterySize: 2500,
    boxSize: 0.5,
    workTime: 50,
    counterOfStarts: 0,
    isFull: false,
    isObstracle: false,
    isUVLampOn: false,

    /* На этот раз мы не будет создавать методы в объекте, мы постараемся их
    заимствовать непосредственно перед использованием. */
};

////

// Обращение к свойствам объекта Samba.
console.log(Samba.model); // Samba-1
console.log(Samba.isFull); // false
// Одолжим методы из объекта Roomba
Samba.startCleaning = Roomba.startCleaning;
Samba.switchUVLamp = Roomba.switchUVLamp;
Samba.goCharge = Roomba.goCharge;

// Вызов методов объекта.
Samba.startCleaning(); // I am cleaning... I have been started:  1 times.

Samba.isUVLampOn = true;

Samba.switchUVLamp(); // UV lamp is not working

Samba.goCharge(); // I am going to charge...
