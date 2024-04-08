// Обращение к свойствам объекта
console.log(Roomba.model);
console.log(Roomba.isFull);

// Вызов методов объекта.
Roomba.startCleaning(); // 'I am cleaning... I have been started: 1 times.'

// Устоновим свойства объекта isUVLampOn в true, чтобы продеманстрировать результат
// работы метода switchUVLamp.
Roomba.switchUVLamp(); // "UV lamp is working"

Roomba.goCharge();