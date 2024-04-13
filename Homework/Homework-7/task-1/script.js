/* Задание 1: ""Управление библиотекой книг""

Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

Свойство title (название) - строка, название книги.
Свойство author (автор) - строка, имя автора книги.
Свойство pages (количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц). */

class Book {
    title = '';
    author = '';
    pages = 0;
    displayInfo() {
        console.log(`Книга ${this.title}, автор ${this.author}, страниц ${this.pages}.`);
    }
    constructor (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

const books = new Book('Стихи Пушкина', 'Пушкин А.С.', '120')
books.displayInfo();