// Escribir un programa que nos diga si un número dado es primo
// (no es divisible por ninguno otro número que no sea él mismo o la unidad)
// Escribir un programa que escriba en pantalla los divisores de un número dado
let ex15Divisors = [];
let isAPrime = true;
document.getElementById("ex15_field_number").addEventListener("keyup", (ev) => {  
  ex15Divisors = [];

  let pElement = document.getElementById("ex15_p");
  const num = getEx15Number();

  isAPrime = isPrime(num);
  
  let message = `El numero ${isAPrime ? "" : "no"} es primo`;
  pElement.innerHTML = message;
});

function getEx15Number() {
  let fieldNum = document.getElementById("ex15_field_number");
  let num = parseInt(fieldNum.value);
  return num;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        console.log("se ha encontrado un divisor");
      return false;
    }    
  }
  console.log("no se ha encontrado divisor alguno")
  return true;
}
