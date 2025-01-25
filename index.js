//Задача Зробити конвертер з градусів Цельсію на Фарингейти
//Формула
//(Температура в градусах Цельсія * 9/5) + 32

const degrees = document.querySelector("#degrees-сelsius");

function fahrenheit(event) {
  event.preventDefault();

  const temperature = Number(document.querySelector("#temperature").value);
 
  //1°C = (1°C*9/5) + 32 = 33.8
  const fahrenheitDegrees = (temperature * 9 / 5)  + 32;
;
  const result = document.querySelector("#result");
  result.innerHTML = `${temperature}°C = ${fahrenheitDegrees.toFixed(2)}°F`;
}

degrees.addEventListener("submit", fahrenheit);
