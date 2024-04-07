/* Задание 6 (Рекурсия)
1. Напишите рекурсивную функцию sumDigits, которая принимает
положительное целое число в качестве аргумента и возвращает
сумму его цифр.
// Пример использования:
console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
+ 7 + 8 + 9). */

function sumDigits(numbers) {
    if(numbers < 10) {
        return numbers;
    }
    return numbers % 10 + sumDigits(Math.floor(numbers / 10));
}


console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9).