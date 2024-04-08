// Объект робот-пылесос.
const Roomba = { //Объекты нужно называть с большой буквы
    //В первую очередь объявляются свойства оъекта.
    model: "Roomba-1",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    counterOfStarts: 0,
    isFull: false,
    isObstracle: false,
    isUVLampOn: false,

    // После свойств объявляются его методы.
    startCleaning: function() {
        this.counterOfStarts++;
        console.log('I am cleaning... I have been started: ', this.counterOfStarts, 
        'times.');
    },
    goCharge: function () {
        console.log('I am going to charge...');
    },
    switchUVLamp: function () {
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working': 'not working'}`);
    }
};