// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let ex5Num1 = 0;
let ex5Num2 = 0;
let ex5_pElement = document.getElementById('ex5_p');
      
document.getElementById("ex5_field_number2").addEventListener("keyup",(ev)=>{    
    ex5_pElement.innerHTML = `El mayor es ${getSup()}`;    
})
function getSup(){
    let fieldNum1= document.getElementById('ex5_field_number1');
    ex5Num1 = parseInt(fieldNum1.value);  
    
    let fieldNum2= document.getElementById('ex5_field_number2');
    ex5Num2 = parseInt(fieldNum2.value); 
    let mayor = ex5Num1;
    if(ex5Num2>mayor){
        mayor = ex5Num2;
    } 

    return mayor;
}