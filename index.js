//const event = new Event('click');
//console.log(event.composedPath());

const btn = document.querySelector('button');

btn.addEventListener('click',btnClickHandler)
function btnClickHandler(event){
  console.log('Hi from button click handler');
//console.log(event.composedPath());
//alert('Hello');
//console.dir(event.target);//той на кому спрацювала подія, елемент до якого подія буде занурюватись
//console.dir(event.currentTarget);//той кому належить EventListener, елемент, якому належав обробник подій
}

document.body.addEventListener('click',bodyClickHandler)
function bodyClickHandler(event){
 console.log('Hi from body click handler');
 console.log(event.target);
 console.log(event.currentTarget);

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