/* **Задание 5**
Дано 2 массива 
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
```
Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, 
а значения второго массива — значениями. */

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const week = [];

if (en.length === ru.length) {
    for (let i = 0; i < en.length; i++) {
        week[en[i]] = ru[i];
    }
} else {
    console.log('Массивы не равны');
}

console.log(week);