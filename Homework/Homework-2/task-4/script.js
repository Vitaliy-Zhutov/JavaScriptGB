/* Задание 4
Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
(Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , 
десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, 
ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

Необходимо от пользователя получить число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

Пример:
Пользователь ввел число 163. Программа должна вывести:
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

Пример 2:
Пользователь ввел число 74. Программа должна вывести:
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: пользователь всегда вводит корректное положительное целое число. */

let num = Number(prompt('Введите любое целое число от 1 до 9999'));

units = num % 10
dozens = (num - units) % 100
hundreds = (num - dozens - units) % 1000

console.log(`В числе ${num} количество сотен: ${hundreds / 100}, десятков: ${dozens / 10}, едениц: ${units}`);

