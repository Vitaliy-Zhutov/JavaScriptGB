// Объект Roomba - робот-пылесос

// Обращение к свойствам объекта
console.log(Roomba.model); // Roomba-1
console.log(Roomba.isFull); // false

// Вызовы методов объекта
setTimeout(Roomba.startCleaning, 1000); // I am cleaning... I have been started:  NaN times.

// Установим свойства объекта isUSLampOn в true
Roomba.isUVLampOn = true;

/* Результат вызова следующего метода зависит от значения, хранящегося в свойстве
объекта, а также от того, как этот метод был вызван. */
setTimeout(Roomba.switchUVLamp, 2000); // UV lamp is working

setTimeout(Roomba.goCharge, 3000); // I am going to charge...

////

// Обращение к свойствам объекта
console.log(Roomba.model); // Roomba-1
console.log(Roomba.isFull); // false

// Вызовы методов объекта
setTimeout(function() {
    Roomba.startCleaning();
}, 1000);

// Установим свойства объекта isUSLampOn в true
Roomba.isUVLampOn = true;

/* Результат вызова следующего метода зависит от значения, хранящегося в свойства объекта,
а также от того как этот метод был вызван. */
setTimeout(function() {
    Roomba.switchUVLamp();
},2000);

setTimeout(function() {
    Roomba.goCharge();
}, 3000);

// I am cleaning... I have been started:  2 times.
// UV lamp is not working
// I am going to charge...
