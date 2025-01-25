/*
Створіть кнопку, яка буде змінювати теиу сайту в HTML

JS
Якщо ви натискаєте на цю кнопку  - на сайті вмикається темний режим
(для тегу bady встановіть backgroundColor темного кольору
а для тексту властивіть color встановіть white)

Якщо ви натискаєте на цю кнопку ще раз на сайті вимикається темний режим
через (toggle)
*/
const btn = document.querySelector('#btn');
const body = document.body;

btn.addEventListener('click', darkMode);
function darkMode(event){
  body.classList.toggle('dark-mode')
}


