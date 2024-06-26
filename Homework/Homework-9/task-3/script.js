/* Задание 3 "Изменение стиля элемента через заданное время"
Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время
задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента 
через указанное время.
// Пример использования функции
changeStyleDelayed('myElement', 2000); 
// Через 2 секунды изменяет стиль элемента с id 'myElement'. */

function changeStyleDelayed(elementID, delay) {
    setTimeout(() => {
        const element = document.getElementById(elementID);
        if (element) {
            element.style.backgroundColor = 'green';
        }
    }, delay);
}

changeStyleDelayed('myElement', 2000);