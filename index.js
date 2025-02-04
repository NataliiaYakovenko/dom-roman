"use strict";

/* <article class="card-wrapper">
        <img class="card-image" src="https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_640.jpg" 
        alt="photo Nataliia">
         <h2 class="username">Nataliia</h2>
         <p class="description">Descroption for Nataliia</p>
      </article> */


const root = document.querySelector("#root");

function creatUserCard(user) {
  //Створення article
  const article = document.createElement("article");
  article.classList.add("card-wrapper");

  //Створення img
  const img = document.createElement("img");
  img.setAttribute("src", user.profilePicture);
  img.setAttribute("alt", user.name);
  img.classList.add("card-image");

  //Створення h2
  const h2 = document.createElement("h2");
  h2.append(user.name);
  h2.classList.add("username");

  //Створення параграфу
  const p = document.createElement("p");
  p.append(user.description);
  p.classList.add("description");

  //Прєднати до article елементи створені в пунктах 2-4 (img,h2,p)
  article.append(img, h2, p);

  //Повертаємо створений article
return article;
}

console.log(data);
const cardArray = data.map((user)=>{
  return creatUserCard(user)
})
root.append(...cardArray)
