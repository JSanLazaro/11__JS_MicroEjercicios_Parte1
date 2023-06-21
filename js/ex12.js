// Añadir al ejercicio anterior que nos diga por cuál de los cuatro
// es divisible (hay que decir todos por los que es divisible)
document.getElementById("ex12_field_number").addEventListener("keyup", (ev) => {
  let pElement = document.getElementById("ex12_p");
  let isMultiples = isMultiple2357();
  pElement.innerHTML = `${
    isMultiples[0] ? "Si" : "No"
  } es divisible por 2  ,` +
  `${
    isMultiples[1] ? "Si" : "No"
  } es divisible por 3  ,` +
  `${
    isMultiples[2] ? "Si" : "No"
  } es divisible por 5 ,` +
  `${
    isMultiples[3] ? "Si" : "No"
  } es divisible por 7  `;
});


function getEx12Number() {
  let fieldNum = document.getElementById("ex12_field_number");
  ex12Num = parseInt(fieldNum.value);
  return ex12Num;
}

function isMultiple2357(){
    const num = getEx12Number();
    let primes = [2,3,5,7]
    let isMultiple = [false,false,false,false];
    for(let i=0;i<primes.length;i++){
        if(num%primes[i]==0){
            isMultiple[i] = true;
        }
    }
    return isMultiple;
}
