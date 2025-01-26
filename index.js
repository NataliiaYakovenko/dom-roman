 
 const button = document.querySelector('button');

 button.addEventListener('click',clickHandler);
 function clickHandler({target}){//достучатися тільки до нашої кнопки, на якій відбувається подія
  console.log(target)
  target.disabled = true; // після натискання кнопка стане не активною

 }