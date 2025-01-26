
const btn = document.querySelector('button');
const div = document.querySelector('#root');

function eventHandler(event){
  //Target - на кому спрацювала подія
  console.dir(event.currentTarget); //той кому належав обробник події
}
//capture:true - зміна проходження події
//btn.addEventListener('click',eventHandler, {capture:true});
//div.addEventListener('click',eventHandler, {capture:true});
//document.body.addEventListener('click',eventHandler, {capture:true});
//window.addEventListener('click',eventHandler, {capture:true});

//once:true - обробник події після першого разу видаляється
//btn.addEventListener('click',eventHandler, {capture:true, once:true});



function eventHandlerButton(event){
  console.log("hi from button handler")
}

btn.addEventListener('click', eventHandlerButton, {capture:true});

//  event.stopPropagation() - зупиняє подію передчасно
function eventHandlerBody(event){
  console.log("hi from body handler")
  event.stopPropagation()
}  

document.body.addEventListener('click',eventHandlerBody, {capture:true});

/*
В середиеі functionDeclaration i functionExpression - this це body
Arrow function, this є window (браузер)
 */


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