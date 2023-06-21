// Escribir un programa que escriba en pantalla los divisores de un número dado
let divisors = [];
document.getElementById("ex13_field_number").addEventListener("keyup", (ev) => {
    divisors = [];
    let pElement = document.getElementById("ex13_p");
    const num = getEx13Number();
    findDivisor(num);
    let message ='Es divisible por ';
    for(let i=0;i<divisors.length;i++){
        message += `${divisors[i]}, `;
    }
    pElement.innerHTML = message;
  });
  
  function getEx13Number() {
    let fieldNum = document.getElementById("ex13_field_number");
    ex13Num = parseInt(fieldNum.value);
    return ex13Num;
  }

  function findDivisor(num){
    for(let i=2;i<=num;i++){
        if(num%i==0){
            divisors.push(i);
            findDivisor(num/i);
            break;
        }
    }
  }