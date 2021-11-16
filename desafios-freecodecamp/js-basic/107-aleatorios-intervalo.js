/**
 * Gerar números inteiros aleatórios dentro de um intervalo
Ao invés de gerar um número inteiro aleatório entre 0 e um número especificado, como fizemos anteriormente, nós podemos gerar um número inteiro aleatório que fica em um intervalo entre dois números especificados.

Para isso, definiremos um número mínimo min e um número máximomax.

Aqui está a fórmula que usaremos. Leve um momento para ler e entender o que esse código está fazendo:

Math.floor(Math.random() * (max - min + 1)) + min
Crie uma função chamada randomRange que recebe um intervalo de myMin e myMax e retorne um número inteiro aleatório que é maior ou igual a myMin, e é menor ou igual a myMax.
 */
function randomRange(myMin, myMax) {
    // Altere apenas o código abaixo desta linha
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Altere apenas o código acima desta linha
  }