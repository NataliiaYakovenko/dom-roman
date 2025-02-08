"use strict";

/*Задача. Створення простенької TODO
Базовий рівень
1. Зробити input для вводу тексту
2. Зробити кнопку, яка по натисненю, текст з інпута перетворює на елемент списку

     <form>
      <input type="text"/>
      <button>Click to add</button>
     </form>
     <ul>
      <li>Зробити щось одне</li>
      <li>Зробити щось друге</li>
      <li>Зробити щось третє</li>
     </ul>


  Просунутий рівень
  Задача до кожної li приєднати кнопку за допомогою якої елемент зі списку можна видалити
 */

const form = document.querySelector("#todo-form");

let taskCount = 0;

form.addEventListener("submit", addItem);
function addItem(event) {
  event.preventDefault();//щоб постійно не оновлювалась сторінка

  //Перевірка чи не забагато завдань на сьогодні
  if(taskCount === 10){
   alert('We have max tasks')
   return;
  }

  const { target } = event; //деструктуризуємо подію
  const [todoInput] = target; //деструктуризуємо мету в події (інпут)

  //Відбувається валідація інпута
  const value = todoInput.value.trim()  //trim()видаляє пробілові символи з початку та кінця рядка
  if (value === ''){
    alert('Text must not be empty')
    return;
  }
  //Логіка створення елементу списку
  const list = document.querySelector("#todo-list");
  const li = document.createElement("li");
  li.textContent = value;
  list.append(li);

  //Створюємо кнопку для видалення
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'remove task';
  deleteBtn.classList.add('remove-btn')
  deleteBtn.addEventListener('click',deleteHandler)
  li.append(deleteBtn)

  //Інкрементуємо лічильник завдань
  taskCount++;

  //викликаємо метод reset - для очищення інпута після відправки форми
  //чистимо форму після відправки
  target.reset()
}
function deleteHandler({target:{parentNode}}){
parentNode.remove()
taskCount--;
}

