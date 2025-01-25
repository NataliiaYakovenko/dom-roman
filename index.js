/*
Маємо div
Маємо дві кнопки: 
 - на одній кнопці написано "Зробити червоним"
 - на другій кнопці написано "Зробити зеленим"
З натисненням на кнопку, фоновий колір div p.1 
має змінитись на відповідний колір вказаний на кнопці 
*/

const box = document.querySelector("#box");
console.log(box.classList);
//якщо ми хочемо видалити клас
box.classList.remove("bg-color-red");
console.log(box.classList);

//робимо деструктуризацію
const [red, green] = document.querySelectorAll(".btn");

//на змінну red робимо обробник подій
red.addEventListener("click", redBtnHandler);

function redBtnHandler(event) {
  //box.style.backgroundColor = 'red';

  //або підключаєм стилі через метод classList.add
  box.classList.toggle("bg-color-red");
}

//на змінну green робимо обробник подій
green.addEventListener("click", greenBtnHandler);

function greenBtnHandler(event) {
  //box.style.backgroundColor = 'green';

  //або підключаєм стилі через метод classList.add
  box.classList.toggle("bg-color-green");
}
