
function creatDiv(){
  const div = document.createElement('div'); //створюємо елемент упам'яті
  div.classList.add('box') //до цього елементу приєднуємо стильовий клас
  div.append('Hello, world!');// до цього елементу приєднуємо техстовий узел
  document.body.append(div); // приєднуємо елемент до body
}

const btn = document.querySelector('button');
btn.addEventListener('click',creatDiv)
//------------------------------------------------------------------

/*Задача
Потрібно створити декілька HTML елементів через JS (document.createElement)
спробуйте додати якісь стильові класи цим елементам (element.classList.add)
спробуйте додати якийсь текстовий вузол для елементів(element.append())
причипіть створені елементи до body   (document.body.append(element)
*/

const img = document.createElement('img');
document.body.append(img);
img.src = "https://static.lepestki.ua/filestorage/products/338/67445/main.jpg";
img.append('Квіти');
img.classList.add('img');

const p = document.createElement('p');
document.body.append(p);
p.append('Колись-то давно, не з моєї памяті, мабуть, ще й батьків і дідів наших не було на світі, жив собі убогий чоловік з жінкою, а у них був одним один син, та й той не такий як треба: таке ледащо той одинчик, що господи! Нізащо і за холодну воду не візьметься, а все тільки на печі сидить та просцем пересипається. Уже йому, може, годів з двадцять, а він усе без штанців на печі сидить — ніколи й не злазить; як подадуть їсти, то й їсть, а не подадуть, то й так обходиться... Батько й мати журяться:');
p.classList.add('p');
