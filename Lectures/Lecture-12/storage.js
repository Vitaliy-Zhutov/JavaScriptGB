// // Пример 1: Установка и получение значения из LocalStorage

// // Установка значения в LocalStorage

// localStorage.setItem('username', 'John');

// // Получение значения из LocalStorage

// let storedUsername = localStorage.getItem('username');
// console.log('Значение из LocalStorage:', storedUsername);

// // Удаление значения из LocalStorage

// localStorage.removeItem('username');

// // Проверка, что значение удалено
// let storedUsername2 = localStorage.getItem('username');
// console.log('Значение из LocalStorage:', storedUsername2);

// // Очистка LocalStorage
// localStorage.clear();

// // Проверка, что LocalStorage пустой
// console.log('LocalStorage:', localStorage);

// Пример 2. Проверяем, есть ли значения счетчика в LocalStorage
// if (localStorage.getItem('counter')) {
//     //Если значения счетчика уже есть, увеличиваем его на 1
//     let counter = parseInt(localStorage.getItem('counter')) + 1;
//     localStorage.setItem('counter', counter.toString());
// } else {
//     // Если значение счетчика не существует, устанавливаем его в 1
//     localStorage.setItem('counter', '1');
// };

// // Выводим значения счетчика в консоль
// console.log('Счетчик посещений:', localStorage.getItem('counter'));

// Проверяем есть ли значение счетчика в LocalStorage
let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

// Обновляем значения счетчика и сохраняем его в LocalStorage
const updateCounter = () => {
    counter ++;
    localStorage.setItem('counter', counter.toString());
};

// Выводим текущее значение счетчика на страницу
document.querySelector('.counter').textContent = counter;

// Обработчик события для кнопки "Увеличить счетчик"
document.querySelector('.increment').addEventListener('click', () => {
    updateCounter();
    document.querySelector('.counter').textContent = counter;
});