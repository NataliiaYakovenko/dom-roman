console.log(this);// window object
//alert('hello')// равноціне window.alert('hello')
//----------------------------------------------------
console.dir(document);
/*
1. Всі документи на сторінці є окремі об'єкти
2. Всі елементи можна підписати на події

 */
//1.Зареєструвати обробник події натискання миші на кнопку
//2. Навісили обробник натискання миші накнопку
function getAlert(){
    alert('Hello user')
}
const btn = document.getElementById('btn')
console.log(btn);
btn.addEventListener('click', getAlert)