/* Задание 2
У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а
некоторые – нет.
Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о
наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния
и instanceof.
1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока
действия), а у RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и
возвращает информацию о наличии и сроке действия премиум-аккаунта, используя
Опциональную цепочку вызовов методов и оператор нулевого слияния.
4. В функции getAccountInfo используйте instanceof для проверки типа переданного
пользователя и дайте соответствующий ответ. */

class User {
  #name;
  #family;
  constructor(name, family) {
    this.#name = name;
    this.#family = family;
  }

  get name() {
    return this.#name;
  }

  get family() {
    return this.#family;
  }
}

// создать RegularUser
class RegularUser extends User {
  constructor(name, family) {
    super(name, family);
  }
}

class PremiumUser extends User {
  constructor(name, family) {
    super(name, family);
  }
  PremiumAccount = null;
  setPremiumAccount() {
    this.PremiumAccount = new Date().setFullYear(new Date().getFullYear() + 1);
  }
  // Примет: установите срок действия на год вперед
}

function getAccountInfo(user) {
  // Премиум аккаунт действителен до такой-то даты или информация отсутствует
  // Пользователь без премум аккаунта
  // Тип пользователя не определен
  if (user instanceof PremiumUser) {
    // console.log(
    //   `Премиум аккаунт действителен до ${new Date(
    //     user.PremiumAccount
    //   ).getFullYear()}` ?? "Информация отсутствует",
    //   user.name,
    //   user.family
    // );
    console.log(
        `${new Date (user.PremiumAccount).toLocaleDateString()}` ?? "Информация отсутствует",
        user.name,
        user.family
    );
  } else if (user instanceof RegularUser) {
    console.log('Пользователь без премиум аккаунта', user.name, user.family);
  } else {
    console.log('Тип пользователя не определен');
  }
}

// Проверка
const regular = new RegularUser('Вася', 'Иванов');
const premium = new PremiumUser('Оля', 'Сидорова');
premium.setPremiumAccount();
const premiumLim = new PremiumUser('Полина', 'Гагарина');

getAccountInfo(regular);
getAccountInfo(premium);
getAccountInfo(premiumLim);