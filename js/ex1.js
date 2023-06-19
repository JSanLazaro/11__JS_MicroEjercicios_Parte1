// Programa que escribe en la pantalla un texto de tipo <h1> que diga "Hello Javascript".

// Resultado : Hello Havascript en body de mi indexedDB.html dentro de h1

// vincular archivo js con html
// vincular archivo StyleSheet.css con html
// crear el componente donde vamos a escribir el TextDecoder
// desde javascript recuperar el componente
// inyectar el h1 con el texto deseado
const title = 'Hello Javascript'
function getElement(){    
    let sectionEx1 = document.getElementById('ex1');
    return sectionEx1;
}

function render(text){
    let section = getElement();
    section.innerHTML = `<h1>${text}<h1>`;
}

render(title);