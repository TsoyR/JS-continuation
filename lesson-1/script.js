// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const super_link = document.getElementById('super_link');
console.log(super_link);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const cardLink = document.getElementsByClassName('card-link');
for (const item in cardLink) {
  cardLink[item].innerHTML = 'ссылка';
}

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const cardBody = document.getElementsByClassName('card-body');

for (let i = 0; i < cardBody.length; i++) {
  const cardLinks = cardBody[i].getElementsByClassName('card-link');
  console.log(cardLinks);
}
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

let allElements = document.getElementsByTagName('*');
console.log(allElements);
for (let i = 0; i < allElements.length; i++) {
  if (allElements[i].getAttribute('data-number') === '50') {
    console.log(allElements[i]);
  }
}

// 5. Выведите содержимое тега title в консоль.

const title = document.getElementsByTagName('title');
console.log(title[0].textContent);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const cardTitle = document.getElementsByClassName('card-title');
console.log(cardTitle[0].parentNode);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const p = document.createElement('p');
p.textContent = 'Привет';
const card = document.getElementsByClassName('card');
card[0].prepend(p);
const firstElementInsideCard = card[0].firstElementChild;
console.log(firstElementInsideCard);

// 8. Удалите тег h6 на странице.

const h6Element = document.getElementsByTagName('h6');
h6Element[0].parentNode.removeChild(h6Element[0]);

const children = cardBody[0].children;
console.log(children);
