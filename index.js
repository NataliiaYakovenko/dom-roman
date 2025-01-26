/*
Задача
1. Ми маємо div
2. Ми маємо 5 кнопок з різними кольорами
3. За натисненням на кнопку, фоновий колір div 
має змінитися на відповідний колір, що вказаний на кнопці
*/
const button = document.querySelectorAll('button');
const div = document.querySelector('#root')

//через for перебираємо всі кнопки
//for(let i = 0; i < button.length; i++){
  //кожну нашу кнопку підписуємо на подію click
  //button[i].addEventListener('click',clickHandler); // у кожній кнопці викликаємо обробник
//}

//або через for перебираємо всі кнопки
for(let btn of button){
  btn.addEventListener('click',clickHandler )
}

function clickHandler({target:{dataset:{color}}}){ //деструктуризуємо target/потім деструктуризуємо dataset
  //console.dir(dataset); // із target витягуємо dataset
  //console.dir(color);// із dataset витягуємо color
  div.style.backgroundColor = color; //color - color, який прихлдить із об'єкту подій

}