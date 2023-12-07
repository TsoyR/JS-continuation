// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const dropdownItem = document.querySelectorAll('.dropdown-item');
dropdownItem.forEach(function (item) {
  item.classList.add('super-dropdown');
});

const btn = document.querySelector('button.btn');
if (btn.classList.contains('btn-secondary')) {
  btn.classList.remove('btn-secondary');
} else {
  btn.classList.add('btn-secondary');
}

const menu = document.querySelectorAll('.menu');
menu.forEach(function (item) {
  if (item.classList.contains('dropdown-menu')) {
    item.classList.remove('dropdown-menu');
  }
});

const dropdown = document.querySelector('div.dropdown');
dropdown.insertAdjacentHTML('afterbegin', '<a href="#">link</a>');

let dropdownMenuButton = document.getElementById('dropdownMenuButton');

dropdownMenuButton.id = 'superDropdown';

let arialabelledby = document.querySelector(
  "[aria-labelledby='dropdownMenuButton']"
);

arialabelledby.dataset.dd = '3';

const dropdownToggle = document.querySelector('.dropdown-toggle');
dropdownToggle.removeAttribute('type');
