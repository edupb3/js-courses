/**
 * Iterar com laços while em JavaScript
Você pode rodar o mesmo código várias vezes usando um laço.

O primeiro tipo de laço que aprenderemos é chamado de laço while porque ele rodará enquanto uma condição específica for verdadeira e vai parar uma vez que a condição não for mais verdadeira.

const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
No código de exemplo acima, o laço while executará por 5 vezes e adicionará os números de 0 até 4 a ourArray.

Vamos tentar fazer um laço while funcionar empurrando valores para um array.

Adicione os números de 5 até 1 (inclusive) em ordem descendente para myArray usando um laço while.
 */

// Configuração
const myArray = [];
let i = 5;
while (i !== -1){
  myArray.push(i);
  i--;
}

// Altere apenas o código abaixo desta linha
