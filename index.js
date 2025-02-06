"use strict";

/*<article class="card-wrapper">
        <div class="image-wrapper">
          <img class="card-image" src="https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg" 
          alt="photo Nataliia">
        </div>
         <h2 class="username">Nataliia</h2>
         <p class="description">Description for Nataliia</p>
      </article>*/

const root = document.querySelector("#root");

function createUserCard(user) {
  //Створюємо обгорку для картинки
  const imageWrapper = createImageWrapper(user)
  //Створення h2
  const h2 = createElement("h2", { classNames: ["username"] }, user.name);
  //Створення параграфу
  const p = createElement("p",{ classNames: ["description"] },user.description);
  //Створюємо і повертаємо article, в який вкладені imageWrapper, h2, p
  return createElement("article",{ classNames: ["card-wrapper"] }, imageWrapper, h2, p);
}

console.log(data);
const cardArray = data.map((user) => {return createUserCard(user)});
root.append(...cardArray);

/**
 *
 * @param {String} type - тег елемента, який нам треба створити
 * @param {String[]} classNames - список класів, які потрібно додати до елемента
 * @param  {...nodes} childNodes - список дочирніх вузлів
 * @returns {HTMLElement}
 */

function createElement(type, {classNames}, ...childNodes) {
  //type - назва тега
  //classNames - класи об'єктів
  //...children - всі інші
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.append(...childNodes);
  return elem;
}

function imageLoadHandler({target}) {
  console.log("image successfully loaded");
  const parentWrapper = document.querySelector(`#wrapper${target.dataset.id}`);
  parentWrapper.append(target)
}

function imageErrorHandler({target}) {
  target.remove();
  console.log("image loading has error");
  imageWrapper.append(user.name[0])
}

function createUserImage(user) {
  const img = document.createElement("img");
  img.setAttribute("src", user.profilePicture);
  img.setAttribute("alt", user.name);
  img.dataset.id = user.id
  img.classList.add("card-image");

  img.addEventListener("load", imageLoadHandler);
  img.addEventListener("error", imageErrorHandler);
  return img;
}

function createImageWrapper(user) {
 
  //Створення заглушки
  const imageWrapper = createElement("div", { classNames: ["image-wrapper"] });
  imageWrapper.setAttribute("id",`wrapper${user.id}`);
  //Визначаємо background-color заглушки з урахуванням імені користувача
  imageWrapper.style.backgroundColor = stringToColour(user.name);


  //Створення img
  const img = createUserImage(user);
  return imageWrapper;
}

function stringToColour(str) {
  let hash = 0;
  str.split('').forEach(char => {
    hash = char.charCodeAt(0) + ((hash << 5) - hash)
  })
  let colour = '#'
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff
    colour += value.toString(16).padStart(2, '0')
  }
  return colour
}
//-----------------------------------------------------
/*
Задача. Створення простенької TODO
Базовий рівень
1. Зробити input для вводу тексту
2. Зробити кнопку, яка по натисненю, текст з інпута перетворює на елемент списку

     <form>
      <input type="text"/>
      <button>Click to add</button>
     </form>
     <ul>
      <li>Зробити щось одне</li>
      <li>Зробити щось друге</li>
      <li>Зробити щось третє</li>
     </ul>


  Просунутий рівень
  Задача до кожної li приєднати кнопку за допомогою якої елемент зі списку можна видалити
  

 */