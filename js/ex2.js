// Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”.
// añadir el ex2.js al index
// crear en index el texto La suma de 3 + 5 es <resultado>, ocn <resultado> un elemento html
// obtener el elemento
// calcular la suma
// inyectar el resultado de la suma en el elemento

function getElement(){
    
    let element = document.getElementById('resultadoEx2');
    return element;
}
function sumar(num1,num2){
    return num1 + num2;
}

function render(){
    let element = getElement();
    let suma = sumar(3,5)
    element.innerHTML = `<strong>${suma}</strong>`;
}

render();
