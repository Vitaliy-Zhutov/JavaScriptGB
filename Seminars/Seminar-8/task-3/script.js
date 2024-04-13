/* Задание 3
Создайте класс Product, который будет представлять товар в магазине.
У товара должны быть следующие свойства:
- name (строка) - имя товара.
- prise (число) - цена товара за одну еденицу.
Создаейте класс ShoppingCart, представляющий корзину интернет-магазина.
Конструктор класса SoppingCart должен принимать два параметра:
- customerName (строка) - имя покупателя.
- ininialTotalCost (число) - начальная общая стоимость заказа (может быть равна 0,
если корзина пуста).
У класса ShoppingCart должен быть метод addItem(product, quantity),
который позволяет добавить товар в корзину. Метод должен принимать два параметра:
- product(объект класса Product) - товар, который добавляется в корзину.
- quantity(чилсо, по умолчанию 1) - кличество едениц товара, которое нужно добавить
в корзину. Если quantity не указано, счтается, что добавляется одна еденица товара.
У класса ShoppingCart должен быть метод getCurrentTotalCost(), который возвращает
текущую общую стоимсоть заказа.
У класса ShoppingCart должен быть метод checkout(), который оформляет заказ
и выводит сообщение с общей стоимостью заказа и благодарит за покупку. 
Формат вывода сообщения:
"Заказ оформлен для {имя покупателя}. Общая стоимость заказа: {общая стоимость} рублей.
Спасибо за покупку!"
*/

class Product {
    constructor(name, prise) {
        this.name = name;
        this.prise = prise;
    }

}

class ShoppingCart {

    constructor(customerName, ininialTotalCost) {
        this.customerName = customerName;
        this.ininialTotalCost = ininialTotalCost;
        this.items = [];
    }

    addItem(product, quantity = 1) {
        this.ininialTotalCost += product.prise * quantity;
        this.items.push({product, quantity})
    }

    getCurrentTotalCost() {
        return this.ininialTotalCost;
    }

    checkout() {
        console.log(
        `Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.ininialTotalCost} рублей. Спасибо за покупку!`
        );
    }
}

const product1 = new Product('Футоболка', 1000);
const product2 = new Product('Джинсы', 2000);

const cart = new ShoppingCart('Дима', 0);

cart.addItem(product1, 2);
cart.addItem(product2);

console.log(`Общая стоимость ${cart.getCurrentTotalCost()}`);

cart.checkout();