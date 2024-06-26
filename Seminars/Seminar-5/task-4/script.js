/* Задание 4
1. Создайте объект riddles
2. Добавьте свойства question, answer
3. создайте метод askQuestion который спрашивает у пользователя
вопрос question и сравнивает ответ с answer
4. Если ответил неверно, то в консоль выводится текст: “вы
проиграли”
5. * По желанию, создать 2 подсказки, если пользователь ответил
неверно. */

const riddles = {
    question: 'Зимой и летом одним цветом',
    answer: 'елка',
    askQuestion() {
        let userAnswer = prompt(this.question);
        userAnswer = userAnswer.toLocaleLowerCase();
        if (userAnswer === this.answer) {
            console.log('Молодец!');
        } else {
            console.log('Вы проиграли');
        }
    }
};

riddles.askQuestion();