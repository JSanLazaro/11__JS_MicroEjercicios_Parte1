// Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.
let num1 = 0;
let num2 = 0;
let pElement = document.getElementById('ex4_p');
      
document.getElementById("ex4_field_number2").addEventListener("keyup",(ev)=>{    
    pElement.innerHTML = `La suma es ${getSum()}`;    
})
function getSum(){
    let fieldNum1= document.getElementById('ex4_field_number1');
    num1 = parseInt(fieldNum1.value);  
    
    let fieldNum2= document.getElementById('ex4_field_number2');
    num2 = parseInt(fieldNum2.value);  

    return num1 + num2;
}