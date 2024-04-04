const student = {
    firstNfme: "Ivan",
    age: 21,
};
/* Функция вычисления года рождения. Принимает текущий год, и вычисляет год рождения
студента используя глобальные данные. Это функция с побочными эффектами. Она сильно
зависит от глобальной переменной student */

const getYeareOfBith = (currentYear) => {
    return currentYear - student.age;
}
console.log(getYeareOfBith(2022)); // 2001
student.age = 25;
console.log(getYeareOfBith(2021)); //1996

/* Мы вызвали функцию дважды с одним и тем же параметром, но получили разный резльтат.
Это значит что мы не можем точно знать что вернет функция в тот или иной момент работы программы
и мы не можем гарантировать что код будет выполняться верно */

// Чистая функция берет даные только из своих аргументов.
const getYeareOfBithPureVersion = (age, currentYear) => {
    return age - currentYear;
}

/* Более сложный пример с мутацией (побочными эффектами), но более частый на практике.
Функция добавления нового ключа в объект. Принимает исходный объект, имя ключа, и значение,
которое надо добавить. */

const addField = (object, key, value) => {
    object[key] = value;
    return object;
};

const updatedStudent = addField(student, 'lastName', 'Belkin');
console.log(student); /* {firstNfme: 'Ivan', age: 25, lastName: 'Belkin'} - вызвав функцию
добалвения поля, мы изменили начальный объект, что может привести к нежелательным последствиям
в остальном коде, которые порой очень сложно обнаружить. Например по коду может идти
итерация объекта student и вывод только начальных полей, но мы добавили в него третье поле
которое также будет проитерировано. */
console.log(updatedStudent); // {firstNfme: 'Ivan', age: 25, lastName: 'Belkin'}
// Чистый вариант функции - нам нужно создать новый объект внутри функции для изменения возврата

const addFieldPureVersion = (object, key, value) => {
    return { // Возвращаем новый объект.
        ...object, // Воспользуемся оператором spred, для получения копии свойств исходного объекта.
        [key]: value // Добавляем новое свойство.
    }
};
const updatedStudentPure = addFieldPureVersion(student, 'practiceTime', 148);
console.log(student); /* {firstNfme: 'Ivan', age: 25, lastName: 'Belkin'} - на этот раз
исходный объект не был изменен. */
console.log(updatedStudentPure); // {firstNfme: 'Ivan', age: 25, lastName: 'Belkin', practiceTime: 148}