/**
 * Usar a função parseInt
A função parseInt() analisa uma string e retorna um inteiro. Exemplo:

const a = parseInt("007");
A função acima converte a string 007 para o inteiro 7. Se o primeiro caractere na string não pode ser convertido em um número, então ele retorna NaN.

Use parseInt() na função convertToInteger para que ela converta a string de entrada str em um inteiro e a retorne.
 */
function convertToInteger(str) {
    const a = parseInt(str)
    return a;
  }
  
  convertToInteger("56");