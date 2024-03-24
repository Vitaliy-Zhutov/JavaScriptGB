/* 1. Сделайте функцию, которая принимает параметром число от 1 до 7,
а возвращает день недели на русском языке. */

function weekday(num) {
    if (num === 1) {
        console.log('Понедельник');
    } else if (num === 2) {
        console.log('Вторник');
    } else if (num === 3) {
        console.log('Среда');
    } else if (num === 4) {
        console.log('Четверг');
    } else if (num === 5) {
        console.log('Пятница');
    } else if (num === 6) {
        console.log('Суббота');
    } else if (num === 7) {
        console.log('Воскресение');
    } else {
        console.log('Не корректное число, введите от 1 до 7');
    }
}

// Решение 2

weekday(7);

function dayOfWeek(day) {
    switch (day) {
        case 1:
            return 'Понедельник'
            break;
        case 2:
            return 'Вторник'
            break;
        case 3:
            return 'Среда'
            break;
        case 4:
            return 'Четверг'
            break;
        case 5:
            return 'Пятница'
            break;
        case 6:
            return 'Суббота'
            break;
        case 7:
            return 'Воскресение'
            break;
    
        default: return 'Не корректное число, введите от 1 до 7'
            break;
    }
}

console.log(dayOfWeek(5));

/* 2. Написать функцию, которой передаем имя и она возвращает
приветствие в зависимости от времени суток (Доброе
утро\день\вечер\ночи Иван) */



function timeOfDay(name) {
    let MyHors = new Date();
    if (MyHors.getHours() >=5 && MyHors.getHours() < 11) {
        console.log(`Доброе утро ${name}`);
    } else if (MyHors.getHours() >= 11 && MyHors.getHours() < 16){
        console.log(`Добрый день ${name}`);
    } else if (MyHors.getHours() >= 16 && MyHors.getHours() < 23){
        console.log(`Добрый вечер ${name}`);
    } else if (MyHors.getHours() >= 23 && MyHors.getHours() < 5){
        console.log(`Доброй ночи ${name}`);
    }
}

timeOfDay('Виталий');