/**
 * Manipular arrays com push()
Uma forma fácil de adicionar dados no final de um array é através da função push().

.push() recebe um ou mais parâmetros e "empurra" eles no final do array.

Exemplos:

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
arr1 agora tem o valor de [1, 2, 3, 4] e arr2 tem o valor de ["Stimpson", "J", "cat", ["happy", "joy"]].

Empurre ["dog", 3] para o final da variável myArray.


 */

// Configuração
const myArray = [["John", 23], ["cat", 2]];

// Altere apenas o código abaixo desta linha
myArray.push(["dog", 3]);