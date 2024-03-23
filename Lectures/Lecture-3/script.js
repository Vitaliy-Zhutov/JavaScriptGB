// function hellName(name) {
//     console.log(name);
// }

// hellName('Alex');

// let count = 5;

// function counter() {
//     return count++;
// }

// counter();

// console.log(count);

////////////////////////////////


// let age = Number(prompt('Сколько вам лет'));

// const lvlUpAge = () => {
//     return age + 5;
// }

// const lvlUpAge = () => age + 5;

// console.log(`Через 5 лет вам будет ${lvlUpAge()}`);

///////////////////////////////

// function hello() {
//     console.log('Hello function');
// }

// hello();

// const sum = (param1, param2) => {
//     return param1 + param2;
// }

// console.log(sum(2, 5));

///////////////////////////////

// const salary = (money) => {
//     money = money * 0.87; // money - money * 0.13
//     return money * 0.75;
// }

// const userMoney = Number(prompt('Сколько ты зарабатываешь?'));

// let moneyMonth = salary(userMoney);

// console.log(`Для расходов можно использовать ${salary(userMoney)}`);
// console.log(`На еду остается: ${moneyMonth * 0.3}`);

///////////////////////////////////////////

// function buy() {
//     alert('Поздравляем!');
//     alert('Вы нажали на кнопку купить');
// }

///////////////////////////////////////////

// const userAnswer1 = prompt('Зимой и летом одним цветом?');

// if (userAnswer === 'елка') {
//     console.log('Угадал');
// } else {
//     console.log('Не угодал');
// }

// const userAnswer2 = prompt('Сидит дет, во 100 шуб одет, кто его раздевает тот слезы проливает');

// if (userAnswer === 'лук') {
//     console.log('Угадал');
// } else {
//     console.log('Не угодал');
// }

function askQuestion(answer, question) {
    const userAnswer = prompt(question);

    if (userAnswer.toLowerCase() === answer) {
        console.log('Угадал');
    } else {
        console.log('Не угодал');
    }
}

function puzzle() {
    askQuestion('лук', 'Сидит дет, во 100 шуб одет, кто его раздевает тот слезы проливает?');
    askQuestion('елка', 'Зимой и летом одним цветом?');
}


