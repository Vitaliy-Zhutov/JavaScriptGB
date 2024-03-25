
let count = 0;
while (count < 5) {
    console.log('Hello');
    count++;
}


////////////////////////////

for (let i = 0; i < 3; i++) {
    console.log('Hello for');
}

for (let j = 0; j <= 2; j++) {
    console.log(j);
}


///////////////////////////////

let pass;
let count2 = 0;

do {
    if (count2 >= 3) {
        alert('Пороль не верный');
    }
    pass = Number(prompt('Ввудите пороль'));
    count2++;
    
} while (pass !== 234);


///////////////////////////

let count3 = 0;
alert(`Вы нажали на кнопку ${count3} раз`);

function counterClickButtons() {
    alert(++count3);
    console.log(count3);
}


const arr = [];
arr.push(1);
console.log(arr);

/////////////////////////////

const arr2 = [1, 2, 'hello', 4, 5, 9];
console.log(arr2);
console.log(arr2[2]);
console.log(arr2.length);
console.log(arr2[arr2.length - 1]);

/////////////////////////////

// push

const user = [];
const userName = prompt('Ваше имя');

user.push(userName);
user.push(Number(prompt('Возраст')));

console.log(user);

////////////////////////////

// pop

const numbers = [2, 3, 19, 15];

alert(`Запомни цифры ${numbers}`);

console.log(numbers.pop());
console.log(numbers);

//////////////////

const word = 'example';
const arrWord = word.split('');
const upWord = arrWord.pop();
arrWord.push(upWord.toLocaleUpperCase());
console.log(arrWord.join(''));

//////////////////

const products = ['Кофта', 'Куртка', 'Футболка', 'Брюки'];
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

//////////////////

const array = [5, 2, 3, 7, 19, 7, 13, 3];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element >= 5) {
        console.log(element);
    } else {
        continue;
    }
}

console.log(array.indexOf(19)); // индекц 19 -> 4

//////////////////////////////

const arrAnswers = ['елка', 'ёлка', 'ель'];
const userAnswer = prompt('Зимой и летом одним цветом');

for (let i = 0; i < arrAnswers.length; i++) {
    const element = arrAnswers[i];
    if (element === userAnswer) {
        console.log('Молодец');
        break;
    } else {
        continue;
    }
    
}