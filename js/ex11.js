// Escribe un programa que pida un número
// y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
document.getElementById("ex11_field_number").addEventListener("keyup", (ev) => {
  let pElement = document.getElementById("ex11_p");
  pElement.innerHTML = `${
    isMultiple() ? "Si" : "No"
  } es divisible por 2, 3, 5 o 7   `;
});
function getEx11Number() {
  let fieldNum = document.getElementById("ex11_field_number");
  ex11Num = parseInt(fieldNum.value);
  return ex11Num;
}
function isMultiple() {
  const num = getEx11Number();
  if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
    return true;
  } else {
    return false;
  }
}
