/* Задание 5
1. Задача: Напишите функцию createPasswordChecker, которая
принимает допустимую длину пароля в качестве аргумента и
возвращает функцию для проверки введенного пароля.
Возвращаемая функция должна принимать пароль и возвращать
true, если его длина соответствует допустимой, и false в противном
случае.
// Пример использования:
const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password')); // Ожидаемый результат:
false
console.log(isPasswordValid('secret')); // Ожидаемый результат: true. */

function createPasswordChecker(maxLenght) {
    return function(password) {
        return password.length <= maxLenght;
    }
}

const isPasswordValid = createPasswordChecker(7);
console.log(isPasswordValid('password')); // Ожидаемый результат: false
console.log(isPasswordValid('secret')); // Ожидаемый результат: true.