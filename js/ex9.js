// Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase.
document.getElementById("ex9_field_phrase").addEventListener("keyup", (ev) => {
    let pElement = document.getElementById("ex9_p");
    pElement.innerHTML = `Aparecen las vocales ${getVocals()} `;
  });

  function getVocals() {
    let vocals = [];
    let aCounter = 0;
    const phrase = getEx9Phrase();
    for (let i = 0; i < phrase.length; i++) {
        const letter = phrase.charAt(i);
      if (isVowel(letter) && !vocals.includes(letter)) {
        vocals.push(letter);
      }
    }
    return vocals;
  }
  function getEx9Phrase() {
    let fieldPhrase = document.getElementById("ex9_field_phrase");
    let phrase = fieldPhrase.value;
    return phrase;
  }
  function isVowel(char) {
    return /[aeiou]/.test(char.toLowerCase());
  }