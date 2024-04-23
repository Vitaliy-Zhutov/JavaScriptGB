/* Задание 1
• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно 
итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.
• Создайте объект musicCollection, который содержит массив альбомов и имеет 
свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:
{
title: "Название альбома",
artist: "Исполнитель",
year: "Год выпуска"
}
• Реализуйте кастомный итератор для объекта musicCollection. 
Итератор должен перебирать альбомы по порядку.
• Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их 
на консоль в формате: Название альбома - Исполнитель (Год выпуска). */

const musicCollection = {
  albums: [
    { title: 'Название альбома 1', artist: 'Исполнитель 1', year: 'Год выпуска: 2022' },
    { title: 'Название альбома 2', artist: 'Исполнитель 2', year: 'Год выпуска: 2023' },
    { title: 'Название альбома 3', artist: 'Исполнитель 3', year: 'Год выпуска: 2024' },
  ],

  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        return index < this.albums.length
          ? { value: this.albums[index++], done: false }
          : { done: true };
      },
    };
  },
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
