/* Задание 1
Текст задания
1. Создайте объект с ключами от 1 до 7, в качестве
значений содержащий имена дней недели. Выведите на
экран “Вторник”
2. Создайте объект user с ключами 'name', 'surname', ‘age’.
Выведите на экран фамилию, имя и возраст через дефис.
3. Добавьте в объект user свойство отчество, которое
пользователь должен ввести с клавиатуры
4. Удалите свойство surname. */

////// task-1 /////

const weekday = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
};

console.log(weekday[2]);

////// task-2 /////

const user = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 34,
};

console.log(`${user.name} - ${user.surname} - ${user.age}`);

////// task-3 /////

user.patronymic = prompt('Отчество');
console.log(user);

////// task-4 /////

delete user.surname;
console.log(user);