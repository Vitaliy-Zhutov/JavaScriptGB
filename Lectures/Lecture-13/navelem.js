// console.log(document.documentElement); // тег <html>
// console.log(document.body); // тег <body>
// console.log(document.head); // тег <head>

console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);
console.log(document.body.children);

/* Сделаем перебор коллекции вывод проверки, является ли он div */
for (let val of document.body.children) {
    console.log(val.localName === 'div' ? "Это div" : "Это не div");
}

for (let val of document.body.childNodes) {
console.log(val.nodeType);
}

// https:dom.spec.whatwg.org/#node

for (let val of document.body.childNodes) {
    console.log(val.nodeValue);
}