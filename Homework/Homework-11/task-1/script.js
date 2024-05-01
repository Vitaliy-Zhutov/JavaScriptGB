/* Задание 1
Представьте, что у вас есть класс для управления библиотекой. 
В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, 
удаления книги и получения информации о наличии книги.
Класс должен содержать приватное свойство #books, 
которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
Реализуйте геттер allBooks, который возвращает текущий список книг.
Реализуйте метод addBook(title), который позволяет добавлять книгу в список.
Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. 
Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке 
и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. 
Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку. */

class Library {
    #books = [];

    constructor(initialListOfBooks) {
        if (!Array.isArray(initialListOfBooks)) {
            throw new Error('Список книг должен быть в виде массива.');
        }
        const noDuplicates = new Set(initialListOfBooks);
        if (noDuplicates.size !== initialListOfBooks.length) {
            throw new Error('Не должно быть дубликатов.');
        }
        this.#books = initialListOfBooks;
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        try {
            if (this.#books.includes(title)) {
                throw new Error(`Данная книга "${title}" уже существует в списке!`);
            } else {
                this.#books.push(title);
                return this.#books;
            }
        } catch (error) {
            console.error(error);
        }
    }

    removeBook(title) {
        try {
            if (this.#books.includes(title)) {
                this.#books = this.#books.filter(bookTitle => bookTitle !== title);
                return this.#books;
            } else {
                throw new Error(`Книги с названием "${title}" нет в списке!`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
};

const newLibrary = new Library(['Пушкин', 'Лермонтов', 'Гоголь', 'Маршак']);

console.log(newLibrary.allBooks);

newLibrary.addBook('Есенин'); // Добавление в список книги
console.log(newLibrary.allBooks);


newLibrary.removeBook('Пушкин'); // Удаление книги
console.log(newLibrary.allBooks);

console.log(newLibrary.hasBook('Пушкин')); // false, книги нет в списке
console.log(newLibrary.hasBook('Лермонтов')); // true, книга есть в списке