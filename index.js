const form = document.getElementById('name-form');

form.addEventListener('submit', consoleForm)

//метод - preventDefoult() - не роби так більше (наприклад не перезавантажу сторінку)
function consoleForm(event){
    event.preventDefault()
    console.log(event);

    const form = event.target;
    const value = form[0].value;
    console.log(value);
    //щоб подивитись на нашу форму як на об'єкт
    console.dir(form[0]);
}