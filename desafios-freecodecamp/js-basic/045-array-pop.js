/**
 * Manipular arrays com pop()
Outra forma de alterar os dados em um array é com a função .pop().

.pop() é usado para remover um valor do final do array. Nós podemos armazenar esse valor removido atribuindo-o a uma variável. Em outras palavras, .pop() remove o último elemento de um array e retorna aquele elemento.

Qualquer tipo de entrada pode ser removida de um array - numbers, strings e até mesmo arrays aninhados.

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
O primeiro console.log exibirá o valor 6 e o segundo exibirá o valor [1, 4].

Use a função .pop() para remover o último item de myArray, atribuindo o valor removido para removedFromMyArray.
 */

// Configuração
var myArray = [["John", 23], ["cat", 2]];

// Altere apenas o código abaixo desta linha
var removedFromMyArray = myArray.pop();