// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

function isParent(parent, child) {
  return child.parentNode === parent;
}

console.log(
  isParent(document.body.children[0], document.querySelector("article"))
);

// 2. Получить список всех ссылок, которые не находятся внутри списка ul

let aList = document.querySelectorAll("a");

let aListOutside = [];

for (let i = 0; i < aList.length; i++) {
  if (aList[i].closest('ul') == null) {
    aListOutside.push(aList[i]);
  }
}

console.log(aListOutside);

// 3. Найти элемент, который находится перед и после списка ul

let list = document.querySelector('ul');

console.log(list.previousElementSibling, list.nextElementSibling);
 