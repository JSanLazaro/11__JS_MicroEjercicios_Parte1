// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let ex6Num1 = 0;
let ex6Num2 = 0;
let ex6Num3 = 0;
let ex6_pElement = document.getElementById('ex6_p');
      
document.getElementById("ex6_field_number3").addEventListener("keyup",(ev)=>{    
    ex6_pElement.innerHTML = `El mayor es ${ex6GetSup()}`;    
})
function ex6GetSup(){
    let fieldNum1= document.getElementById('ex6_field_number1');
    ex6Num1 = parseInt(fieldNum1.value);  
    
    let fieldNum2= document.getElementById('ex6_field_number2');
    ex6Num2 = parseInt(fieldNum2.value); 

    let fieldNum3= document.getElementById('ex6_field_number3');
    ex6Num3 = parseInt(fieldNum3.value); 

    let mayor = ex6Num1;
    if(ex6Num2>mayor){
        mayor = ex6Num2;
    } 
    if(ex6Num3>mayor){
        mayor = ex6Num3;
    }

    return mayor;
}
