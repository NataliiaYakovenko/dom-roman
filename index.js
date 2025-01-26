/*
https://cdn.e-pet.com.ua/uploaded/2024/10/27/18/IMG_6436_Original-cGUpvY8x.jpg

https://tvoemisto.tv/media/gallery/full/6/8/68822578388_o.jpg


В HTML ми маємо елемент картинки img

В HTML ми маємо дві кнопки
Ці кнопки в дата - атрибутах містять посилання на певну картинку(адреса картинки)

За натисненням на відповідну кнопку має відкритись (відобразитись в тезі img) відповідна цій кнопці картинка

*/
const[btn1,btn2] = document.querySelectorAll('button');

btn1.addEventListener('click',clickHandler);
btn2.addEventListener('click',clickHandler);

function clickHandler({target}){
  const img = target.parentNode.children[0];//наш шлях до картинки
  console.log(target.dataset.src);// шлях до посилань на картинки
  img.setAttribute('src',target.dataset.src)
}