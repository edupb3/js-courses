/*Transformar de binário em string
Retorne uma frase traduzida para o inglês da string binária passada.

A string binária será separada por espaço.*/

function binaryAgent(str) {
    const arr = str.split(" ")
  
    const wordArr = arr
      .map(el => Number.parseInt(el, 2))
      .map(el => String.fromCharCode(el))
  
    console.log(wordArr.join(""))
    return wordArr.join("");
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

  binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")