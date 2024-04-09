/* Напишите рекурсивную функцию findElementByClass, 
которая принимает корневой элемент дерева DOM и название класса в качестве аргументов 
и возвращает первый найденный элемент с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement); */

let serchElement = [];
function findElementByClass(root, myclass) {
   if (root.hasChildNodes()) {
      for (let element of root.children) {
         if (element.className === myclass) {
            serchElement.push(element);
            if (serchElement[0].className !== myclass) {
               serchElement = [];
               serchElement.push(element);
            }
         }
         findElementByClass(element, myclass);
      }
   }
   return serchElement[0];
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);