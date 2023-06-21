// Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
let commonDivisors = [];
document.getElementById("ex14_field_number2").addEventListener("keyup", (ev) => {
    commonDivisors = [];
    let pElement = document.getElementById("ex14_p");
    const num1 = getEx14Number1();
    const num2 = getEx14Number2();
    findCommonDivisors(num1,num2);
    let message ='Divisores comunes ';
    for(let i=0;i<commonDivisors.length;i++){
        message += `${commonDivisors[i]}, `;
    }
    pElement.innerHTML = message;
  });
  
  function getEx14Number1() {
    let fieldNum = document.getElementById("ex14_field_number1");
    const num = parseInt(fieldNum.value);
    return num;
  }
  function getEx14Number2() {
    let fieldNum = document.getElementById("ex14_field_number2");
    const num = parseInt(fieldNum.value);
    return num;
  }

  function findCommonDivisors(num1,num2){
    for(let i=2;i<=num1;i++){
        if(num1%i==0 && num2%i==0){
            commonDivisors.push(i);
            findCommonDivisors(num1/i,num2/i);
            break;
        }
    }
  }
