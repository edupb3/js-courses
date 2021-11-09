/**
 * Declarar variáveis somente de leitura com a palavra-chave const
A palavra-chave let não é a única nova forma de declarar variáveis. Na versão ES6, você também pode declarar variáveis usando a palavra-chave const.

const possui todos os recursos maravilhosos que let tem, com o bônus adicional que variáveis declaradas usando const são somente de leitura. Elas têm um valor constante, o que significa que a variável atribuída com const não pode ser atribuída novamente.

const FAV_PET = "Cats";
FAV_PET = "Dogs";
O console vai exibir um erro devido à reatribuição do valor de FAV_PET.

Como você pode ver, tentar reatribuir uma variável declarada com const lançará um erro. Você sempre deve nomear variáveis que você não quer reatribuir, usando a palavra-chave const. Isso ajuda quando você acidentalmente tenta reatribuir uma variável que deveria ser constante. Uma prática comum ao nomear constantes é colocar todas as letras em maiúsculas, com palavras separadas por sublinhado (underscore).

Observação: é comum que os desenvolvedores usem nomes de variáveis maiúsculas para valores imutáveis e minúsculas ou camelCase para valores mutáveis (objetos e arrays). Em um desafio posterior, você verá um exemplo de um nome de variável em minúsculo usado para um array.

Altere o código para que todas as variáveis sejam declaradas usando let ou const. Use let quando você quiser que a variável mude e const quando você quiser que a variável permaneça constante. Além disso, renomeie as variáveis declaradas com const para estar em conformidade com as práticas comuns, o que significa que constantes devem ter todas as letras em maiúsculo.
 */

function printManyTimes(str) {

    // Altere apenas o código abaixo desta linha
  
    const sentence  = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      const SENTENCE = sentence.toUpperCase()
      console.log(SENTENCE);
    }
  
    // Altere apenas o código acima desta linha
  
  }
  printManyTimes("freeCodeCamp");