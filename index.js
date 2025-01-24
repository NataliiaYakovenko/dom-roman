const btn = document.querySelector('button');

const btn2 = document.querySelector('.super-btn');

const btn3 = document.querySelector('#btnbtn');

const btnCollection = document.querySelectorAll('button');

const paragraphCollection = document.querySelectorAll('.paragraph:nth-child(even)')
paragraphCollection[0].textContent = 'Nataliia is beautiful girl'

for(let p of paragraphCollection){
    p.style.color = 'blue';
    p.style.backgroundColor = 'yellow';
}
console.log(paragraphCollection);



