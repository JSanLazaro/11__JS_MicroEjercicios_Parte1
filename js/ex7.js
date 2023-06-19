// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
document.getElementById("ex7_field_phrase").addEventListener("keyup", (ev) => {
  let pElement = document.getElementById("ex7_p");
  pElement.innerHTML = `La vocal a aparece ${getVocalACount()} veces`;
});

function getPhrase() {
  let fieldPhrase = document.getElementById("ex7_field_phrase");
  let phrase = fieldPhrase.value;
  return phrase;
}

function getVocalACount() {
  let aCounter = 0;
  let phrase = getPhrase();
  for (let i = 0; i < phrase.length; i++) {
    if (phrase.charAt(i) === "a") {
      aCounter++;
    }
  }
  return aCounter;
}
