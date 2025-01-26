
function creatDiv(){
  const div = document.createElement('div'); //створюємо елемент упам'яті
  div.classList.add('box') //до цього елементу приєднуємо стильовий клас
  div.append('Hello, world!');// до цього елементу приєднуємо техстовий узел
  document.body.append(div); // приєднуємо елемент до body
}

const btn = document.querySelector('button');
btn.addEventListener('click',creatDiv)
//------------------------------------------------------------------

