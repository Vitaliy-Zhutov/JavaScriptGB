const product = {
    name: 'Стол',
    prise: 2000,
    count: 0,
    userRegistred: false,
    reg: function () {
        this.userRegistred = true;
    },
    countProduct: function () {
        if (this.count > 0) {
            console.log('Вы можете купить данный товар');
        } else {
            console.log('Данный товар нельзя добавить в корзину');
        }
    },
    buyProduct: function () {
        if (this.userRegistred) {
            console.log('Товар в корзине');
        } else {
            console.log('Вам необходимо зарегистрироваться, выполнить product.reg()');
        }
    }
}
product.buyProduct();
product.reg();
product.buyProduct();

//////////////////////

const car = {
    make: "Audi",
    model: "A5",
    year: 2023,
    color: "red",
    passengers: 2,
    power: 249,
    odometer: 0,
    engineIsStarted: false,
    starteEngine: function () {
        this.engineIsStarted = true;
    },
    stopEngine: function () {
        this.engineIsStarted = false;
    },
    hoveRoadTrip: function (distance) {
        if (this.engineIsStarted) {
            this.odometer += distance;
        } else {
            alert('Сначала запустите двигатель')
        }
    }
};

/////////////////////