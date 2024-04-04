const createCounter = () => {
    let counter = 0;
    return () => {
        return ++counter;
    }
}

// console.log(counter); - counter is not defined

// Создаем счетчик.
const counter1 = createCounter();
counter1(); // 1
counter1(); // 2

// Создадим еще один счетчик, каждый будет работать независимо. 
const counter2 = createCounter();
counter2(); // 1
counter1(); // 3

//////////////////

const closureFunction = () => {
    const cache = {};
    return (x) => {
        if (cache[x]) return cache [x];
        const result = x * x;
        cache[x] = result;
        return result;
    }
}

const chachedPow = closureFunction();
chachedPow(2); // 4
chachedPow(8); // 64
chachedPow(2); // 4