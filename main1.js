// Зная структуру html, с помощью изученных
// методов получить (в консоль):
// 1. head
// 2. body
// 3. все дочерние элементы body и вывести их в
// консоль.
// 4. первый div и все его дочерние узлы
// а) вывести все дочерние узлы в консоль
// б) вывести в консоль все дочерние узлы,
// кроме первого и последнего
// Для навигации по DOM использовать методы,
// которые возвращают только элементы

let head = document.head;

console.log(head);

let body = document.body;

console.log(body);

console.log(body.children);

let divFirst = document.querySelector('div');

console.log(divFirst);

console.log(divFirst.children);

let pFirst = divFirst.firstElementChild;

let pLast = divFirst.lastElementChild;

console.log(pFirst.nextElementSibling, pLast.previousElementSibling);

