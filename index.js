"use strict";

/*
Дана section, на якій ми будемо клацати мишею
Дан div, який має переміститись на точку, в яку клцнули мишею

*/

const gameField = document.querySelector("#game-field");
const box = document.querySelector("#box");

gameField.addEventListener("click", clickHandler, { capture: true });

function clickHandler(event) {
  //Якщо ми натискаємо не ігрове поле(тобто на квадратик) - переміщеню не бути
  event.stopPropagation();
  //target - це елемент, на якому відбулась подія (на який елемент саме клікнули)
  //currentTarget - якому елементу належав обробник подій
  
  if (event.currentTarget === event.target) {    //Якщо ми натискаємо на ігрове поле - переміщеню бути
    const {target:{children: { box }},clientY,clientX} = event;

    box.style.top = `${clientY}px`;
    box.style.left = `${clientX}px`;
  }
}
