/**Usar o Pig Latin
Pig Latin é uma forma de alterar palavras inglesas. As regras são as seguintes:

- Se uma palavra começar com uma consoante, tire a primeira consoante ou grupo de consoantes, mova-a para o final da palavra e adicione ay a ela.

- Se uma palavra começar com uma vogal, basta adicionar way no final.

Traduza a string fornecida para o Pig Latin. As strings de entrada terão a garantia de serem palavras em inglês com as letras em minúsculo.

 */

const initialConsonant = word => {
    let regExp = /^[^aeiouAEIOU]+/gi;     
    return {
        consonant: word.match(regExp),
        restOfWord: word.replace(regExp, "")
    } 
}

function translatePigLatin(str) {
    const {consonant, restOfWord} = initialConsonant(str);
    if (!consonant){
        return str.concat("way");
    }
    return restOfWord.concat(consonant).concat("ay");
  }
  
translatePigLatin("california") //deve retornar a string aliforniacay.

translatePigLatin("paragraphs") //deve retornar a string aragraphspay.

translatePigLatin("glove") //deve retornar a string oveglay.

translatePigLatin("algorithm") //deve retornar a string algorithmway.

translatePigLatin("eight") //deve retornar a string eightway.

//Deve lidar com palavras onde a primeira vogal vem no meio da palavra.
translatePigLatin("schwartz") //deve retornar a string artzschway.

//Deve lidar com palavras sem vogais. 
translatePigLatin("rhythm") //deve retornar a string rhythmay.