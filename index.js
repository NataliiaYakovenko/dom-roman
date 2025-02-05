"use strict";

/* <article class="card-wrapper">
        <img class="card-image" src="https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg" 
        alt="photo Nataliia">
         <h2 class="username">Nataliia</h2>
         <p class="description">Descroption for Nataliia</p>
      </article> */

const root = document.querySelector("#root");

function creatUserCard(user) {
  //Створення img
  const img = document.createElement("img");
  img.setAttribute("src", user.profilePicture);
  img.setAttribute("alt", user.name);
  img.classList.add("card-image");
  //Створення h2
  const h2 = creatElement('h2',{clasNames:['username']},user.name)
  //Створення параграфу
  const p = creatElement('p',{clasNames:['description']},user.description)
  //Створюємо і повертаємо article, в який вкладені img, h2, p
  return creatElement('article',{clasNames:['card-wrapper']},img, h2, p);
}

console.log(data);
const cardArray = data.map((user) => {
  return creatUserCard(user);
});
root.append(...cardArray);


/**
 * 
 * @param {String} type - тег елемента, який нам треба створити
 * @param {String[]} clasNames - список класів, які потрібно додати до елемента
 * @param  {...nodes} childNodes - список дочирніх вузлів
 * @returns {HTMLElement}
 */
function creatElement(type, { clasNames }, ...childNodes) {
  //type - назва тега
  //clasNames - класи об'єктів
  //...children - всі інші
  const elem = document.createElement(type);
  elem.classList.add(...clasNames);
  elem.append(...childNodes);
  return elem;
}
