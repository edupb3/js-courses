/**
 * Transformar um array em uma string usando o método join
O método join é usado para juntar os elementos de um array, resultando em uma string. Ele recebe um delimitador como argumento, que é usado para conectar os elementos na string.

Exemplo:

const arr = ["Hello", "World"];
const str = arr.join(" ");
O valor de str é Hello World.

Use o método join (entre outros) dentro da função sentensify para criar uma frase a partir das palavras da string str. A função deve retornar uma string. Por exemplo, I-like-Star-Wars deve ser convertido para I like Star Wars. Não use o método replace neste desafio.
 */
function sentensify(str) {
    // Altere apenas o código abaixo desta linha
    const result = str.split( /[,\s\-\.]/)
    return result.join(" ");
  
    // Altere apenas o código acima desta linha
  }
  
  sentensify("May-the-force-be-with-you");