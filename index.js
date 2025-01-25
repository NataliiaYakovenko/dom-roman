/*
Створити конвертер валют

Декомпозиція - це вирішення задачі частинами:
1.Маємо створити HTML сторінку з формою, яка містить два поля вводу
 - одне поле для ведення суми в одній валюті
 - інше поле - для вибору валюти, в яку ми будемо цю суму конвертувати
 
2. Додати в форму кнопку 'Конвертувати' 

3. Написати JS обробник події відправки форми
 - отримати значення введеної суми та обраної валюти
 - обчислити конвертовану суму, помноживши введену користувачем суму
 на курс обміну вибраної користувачем валюти
 - вивести результат конвертації на сторінку для відображеня результату (textContent)

4. Підписати форму на подію відправки форми 'submit', 
в якості слухача використовувати функцію з пункта 3  

*/
//-----------------------------------------------------------------
//створюємо об'єкт для зберігання курсу валют
const CURRENCY = {
  USD_TO_UAH: 37.65,
  EUR_TO_UAH: 40.61
}
const convertorForm = document.querySelector('#currency-converter-form');


function convertHandler(event){
    event.preventDefault() // метод, який зупинить перезавантаження сторінки
  
    //отримуємо значення введеної суми та обраної валюти
    //число повертається  string, тому використовуємо конструктор Number
    const amount = Number(document.querySelector('#amount').value);
    const currency = document.querySelector('#currency').value;
    
    let convertAmount; // сюди покладемо конвертовану суму
    //обчислюємо конвертовану суму
    if(currency === 'USD'){
        convertAmount = amount * CURRENCY.USD_TO_UAH //число помножуємо на курс долора
    } else if(currency === 'EUR'){
        convertAmount = amount * CURRENCY.EUR_TO_UAH //число помножуємо на курс евро
    } else{
        throw new Error('Something problem ...!')
    }

    //вивводимо результат конвертації на сторінку
    const result = document.querySelector('#result')

    result.innerHTML = `${amount} ${currency} = ${convertAmount.toFixed(2)} UAH`
}
//Підписуємо форму на подію відправки форми 'submit'
convertorForm.addEventListener('submit', convertHandler);
