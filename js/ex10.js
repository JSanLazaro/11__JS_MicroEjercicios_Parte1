// Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
document.getElementById("ex10_field_phrase").addEventListener("keyup", (ev) => {
    let pElement = document.getElementById("ex10_p");
    let map = getVocalsWithCount();
    pElement.innerHTML = `Aparecen las vocales 
    a=${map.get('a')},
    e=${map.get('e')},
    i=${map.get('i')},
    o=${map.get('o')},
    u=${map.get('u')}    
    `;
  });
  function getVocalsWithCount() {
    let vocalsWithCount = new Map();
    vocalsWithCount.set('a', 0); 
    vocalsWithCount.set('e', 0); 
    vocalsWithCount.set('i', 0); 
    vocalsWithCount.set('o', 0); 
    vocalsWithCount.set('u', 0); 
    let aCounter = 0;
    const phrase = getEx10Phrase();
    for (let i = 0; i < phrase.length; i++) {
        const letter = phrase.charAt(i);
      if (isVowel(letter)) {
        let vocalCount = vocalsWithCount.get(letter);
        console.log(letter + " " + vocalCount);
        vocalCount++;
        vocalsWithCount.set(letter, vocalCount);
      }
    }
    // console.log(vocalsWithCount);
    return vocalsWithCount;
  }

  function getEx10Phrase() {
    let fieldPhrase = document.getElementById("ex10_field_phrase");
    let phrase = fieldPhrase.value;
    return phrase;
  }
  function isVowel(char) {
    return /[aeiou]/.test(char.toLowerCase());
  }