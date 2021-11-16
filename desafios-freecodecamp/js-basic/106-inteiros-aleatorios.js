/**
 * Gerar números inteiros aleatórios com JavaScript
É ótimo podermos gerar números decimais aleatórios, mas é ainda mais útil se usarmos isso para gerar números inteiros aleatórios.

Use Math.random() para gerar um decimal aleatório.
Multiplique o decimal aleatório por 20.
Use outra função, Math.floor() para arredondar o número para baixo para o número inteiro mais próximo.
Lembre-se de que Math.random() pode nunca retornar um 1 e, por estarmos arredondando, é impossível também receber 20. Essa técnica nos dará um número inteiro entre 0 e 19.

Juntando tudo, é assim que nosso código se parece:

Math.floor(Math.random() * 20);
Nós estamos chamando Math.random(), multiplicando o resultado por 20, e em seguida passando o valor para a função Math.floor() para arredondar o valor para o número inteiro mais próximo abaixo.

Use essa técnica para gerar e retornar um número inteiro aleatório entre 0 e 9.


 */
function randomWholeNum() {

    // Altere apenas o código abaixo desta linha
  
    return Math.floor(Math.random() * 10);
  }