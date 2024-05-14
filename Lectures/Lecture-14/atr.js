/* На странице есть список элементов, каждый из которых имеет артрибут data-price, содержащий цену
товара. Создайте функцию, которая принимает максимальную цену и скрывает все элементы с ценой 
выше указанных значений. */

const filterElementsByDataAttribute = (attributeName, maxPrice) => {
    const elemens = Array.from(document.querySelectorAll(`[${attributeName}]`));
    elemens.forEach(element => {
        const price = parseFloat(element.getAttribute(attributeName));
        if (price > maxPrice) {
            element.style.display = 'none';
        }
    });
};

// Пример использования
filterElementsByDataAttribute('data-price', 50);

/* На странице есть список элементов, каждый из которых имеет атрибут data-rating, содержащий рейтинг
товара. Создайте функцию, которая сортирует элементы в порядке убывания рейтинга и переставляет их
на странице в соответствии с новым порядком */

const sortElementsByDataAttribute = attributeName => {
    const rating = document.querySelector('.rating');
    const elemens = Array.from(rating.querySelectorAll(`[${attributeName}]`));
    elemens.sort((a, b) => {
        const ratingA = parseInt(a.getAttribute(attributeName));
        const ratingB = parseInt(b.getAttribute(attributeName));
        return ratingB - ratingA;
    });
    elemens.forEach(element => {
        rating.appendChild(element);
    });
};

// Пример использования
sortElementsByDataAttribute('data-rating');