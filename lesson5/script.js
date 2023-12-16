// Задание 1 (повторить то, что делали на семинаре)
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

let content = document.querySelector('.content');

const data = JSON.parse(dataInfo);

data.map(function (value) {
  let img = document.createElement('img');
  let title = document.createElement('h1');
  let paragraf = document.createElement('p');
  img.src = value.url;
  img.height = value.height;
  img.width = value.width;
  title.textContent = value.title;
  paragraf.textContent = value.desc;
  content.appendChild(img);
  content.appendChild(title);
  content.appendChild(paragraf);
});
