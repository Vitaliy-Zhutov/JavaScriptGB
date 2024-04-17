/* Задание 2
Напишите программу, которая загружает данные с сервера с
использованием объекта XMLHttpRequest и отображает полученную
информацию в консоли.
1. Создайте функцию loadData(url), которая принимает аргумент url
(строка) - адрес сервера для загрузки данных.
2. Внутри функции loadData() создайте объект XMLHttpRequest с
помощью new XMLHttpRequest().
3. Зарегистрируйте обработчик события onreadystatechange, который
будет вызываться при изменении состояния запроса. Проверьте,
если readyState равен 4 (успешно выполнен запрос) и status равен
200 (успешный статус ответа сервера), то выведите полученные
данные в консоль с помощью console.log(xhr.responseText).
4. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип
запроса, url - адрес сервера, true - асинхронный режим запроса.
5. Отправьте запрос на сервер с помощью xhr.send(). */

/* Задание доп.
Вы разрабатываете простой веб-интерфейс для отображения списка пользователей с сервера и возможноси сортировки
этих пользователей по имени. У вас уже есть функциональность для получения списка пользователей с сервера и
отображения их в виде списка на странице.
Ваша задача - реализовать сортировку пользователей по имени и добавить кнопку, при нажатии на которую список
пользователей будет автоматически сортировать по имени.*/

// Вариант 1. XMLHttpRequest

// function loadData(url) {
//     const xhr = new XMLHttpRequest;

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             console.log(xhr.responseText);
//         }
//     }
//     xhr.open('GET', url, true);
//     xhr.send();
// }

// loadData("http://jsonplaceholder.typicode.com/users");

// Вариант 1. fetch

const userstList = document.querySelector('.users-list');

const renderUsersList = (users) => {
    userstList.innerHTML = '';
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div>
                <h2>${user.name}</h2>
                <p>${user.email}</p>
            </div>
        `
        userstList.append(listItem);
    });
}

const sortUsersByName = (users) => {
    const sortedUsers = users.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if(nameA < nameB) {
            return -1;
        }
        if(nameA > nameB) {
            return 1;
        }
        return 0;
    })
    renderUsersList(sortedUsers);
}

fetch("http://jsonplaceholder.typicode.com/users")
    .then((result) => result.json())
    .then(data => {
        renderUsersList(data);
        const sortEl = document.querySelector('.sort');
        sortEl.addEventListener('click', function (e) {
            sortUsersByName(data);
        })
    })
    .catch((err) => {
        console.log('Много ошибок, решай вопросы');
    })

