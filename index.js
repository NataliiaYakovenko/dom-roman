const collection = document.getElementsByClassName('paragraph')
console.log(collection);
//Кожен наш параграф повинен бути зеленого кольору

//varius1
//for(let i = 0; i < collection.length; i ++){
    //collection[i].style.color = 'green'
//}
//------------------------------------------

//varius2 через цикл for...of - спеціальний цикл. який перебирає об'єкт по ключам
for(let p of collection){
    p.style.color = 'green'
}

const btns = document.getElementsByTagName('button');
const array = [...btns]
console.log(btns);  //масивоподібний об'єкт
console.log(array); //масив

array.forEach((button)=>{
    button.style.color = 'violet'
})

function backgroundBtn(event){
   event.target.style.backgroundColor = 'yellow'
}
for(let b of btns){
    b.addEventListener('click',backgroundBtn)
}

function hello (event){
    console.log('Hello, user!');
   event.target.removeEventListener('click', hello)
}
for(let btn of btns){ //btn- поточна переглядаєма кнопка
 btn.addEventListener('click', hello)
}





