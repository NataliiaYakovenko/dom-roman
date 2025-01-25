//const event = new Event('click');
//console.log(event.composedPath());

const btn = document.querySelector('button');

window.addEventListener('click',btnClickHander)
function btnClickHander(event){
//console.log(event.composedPath());
//alert('Hello');
console.dir(event.target);//той на кому спрацювала подія, елемент до якого подія буде занурюватись
console.dir(event.currentTarget);//той кому належить EventListener, елемент, якому належав обробник подій
}
const clickEvent = new MouseEvent('click');
//btn.dispatchEvent(clickEvent);

//--------------------------------------------

/*
Існує три фази подій
 1 фаза занурення - 
        Подія відбувається на рівні операційної системи
                            |
         Операційна система передає подію браузеру (Window)
                            |
         Браузер передає подію document
                            |
         Document передає в body
                            |
По ітогу подія дістається до елементу на якому сталася подія

 2 фаза цілі
 Подія досягла елемента, елемент це таргет

 3 фаза - фаза вспливання(винурення)
 Подія починає винурюватись у зворотньому напрямку від елемента (таргета) до ОС


*/