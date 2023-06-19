// 3. Escribe un programa que pida 
// el nombre del usuario con un input 
// y escriba un texto que diga “Hola <nombre-de-usuario>”

// Resultado : "Hola $nombre_de_usuario" en <p>

// vincular archivo js con html
// vincular archivo StyleSheet.css con html
// crear el componente donde vamos a escribir
// en javascript obtener el texto del input
// en javascript recuperar el componente
// en javascript inyectar el nombre con el texto deseado

document.getElementById("ex3_field_name").addEventListener("keyup",(ev)=>{    
        writeName();    
})
function getName(){
    let inputComponent = document.getElementById('ex3_field_name');
    let userName = inputComponent.value;    
    return userName;
}
function writeName(){
    let name = getName();
    let pElement = document.getElementById('ex3_p');
    pElement.innerHTML = `Hola ${name}`;    
}
