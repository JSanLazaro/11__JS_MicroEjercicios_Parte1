// Escribe un programa que pida una frase y escriba las vocales que aparecen
// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
document.getElementById("ex8_field_phrase").addEventListener("keyup", (ev) => {
    let pElement = document.getElementById("ex8_p");
    pElement.innerHTML = `Aparecen ${getVocalsCount()} vocales`;
  });
  function getEx8Phrase() {
    let fieldPhrase = document.getElementById("ex8_field_phrase");
    let phrase = fieldPhrase.value;
    return phrase;
  }
  function getVocalsCount() {
    let aCounter = 0;
    let phrase = getEx8Phrase();
    for (let i = 0; i < phrase.length; i++) {
      if (isVowel(phrase.charAt(i))) {
        aCounter++;
      }
    }
    return aCounter;
  }
  function isVowel(char) {
    return /[aeiou]/.test(char.toLowerCase());
  }
//   function vowelTest(s) {
//     return (/^[aeiou]$/i).test(s);
//   }
