/**Procurar e substituir
Realize uma busca e substitua na frase usando os argumentos fornecidos e retorne a nova frase.

O primeiro argumento é a frase para realizar a busca e substituir.

O segundo argumento é a palavra que você substituirá (antes).

O terceiro argumento é com o que você vai substituir o segundo argumento (depois).

Observação: preserve a capitalização do primeiro caractere na palavra original quando você estiver substituindo. Por exemplo, se você quiser substituir a palavra Book com a palavra dog, deve ser substituído com Dog */

function capitalize(word, upper = true){
    let firstCharacter = word.charAt(0);
    let arr = word.split("");    
    arr.splice(0, 1, upper ? firstCharacter.toUpperCase() : firstCharacter.toLowerCase()) 
    return arr.join("");
}

const hasUpperCase = word => {
    const regExp = /^[A-Z]/gm;
    return word.match(regExp);
}

function myReplace(str, before, after) {
    
    let arrayOfStrings = str.split(" ");
    
    after = hasUpperCase(before) ? capitalize(after) : capitalize(after, false);
    
    const changeWord = el => {
        let newWord = el === before ? after : el;
        return newWord;
    }
    const arrayResult = arrayOfStrings.map(changeWord)
    const finalPhase = arrayResult.join(" ");    
    
    return finalPhase;
  }
  
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
  myReplace("Let us go to the store", "store", "mall")
  myReplace("I think we should look up there", "up", "Down")