/* Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, 
но чтобы исключить слишком короткие или слишком длинные сообщения, 
вы решаете установить некоторые ограничения.
Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, 
где будут отображаться отзывы.
Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. 
Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.
При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения. */

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const input = document.querySelector('.input');
const buttons = document.querySelector('.buttons');
const reviews = document.querySelector('.reviews');
const divError = document.querySelector('.error');

initialData.forEach(element => {
    const productName = document.createElement('h3');
    productName.textContent = element.product;
    reviews.appendChild(productName);
    element.reviews.forEach(review => {
        const defaultReview = document.createElement('p');
        defaultReview.textContent = review.text;
        reviews.appendChild(defaultReview);
    });
});


buttons.addEventListener('click', function () {
    try {
        if (userInput.value.trim().length < 20 || input.value.trim().length > 500) {
            throw new Error ('Несоответствующая длина отзыва')
        }
        const reviewElem = document.createElement('p');
        reviewElem.textContent = (input.value);
        reviews.appendChild(reviewElem);
        divError.textContent = '';
    } catch (error) {
        divError.textContent = error.message;
    }
});
