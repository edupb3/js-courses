/**
 * Manipular arrays com shift()
pop() sempre remove o último elemento de um array. E se você quiser remover o primeiro?

É aí que o .shift() vem a ser útil. Ele funciona da mesma forma que .pop(), exceto que ele remove o primeiro elemento ao invés do último.

Exemplo:

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
removedFromOurArray teria o valor da string Stimpson e ourArray teria o valor de ["J", ["cat"]].

Use a função .shift() para remover o primeiro item de myArray, atribuindo o valor "removido" para removedFromMyArray.
 */

// Configuração
var myArray = [["John", 23], ["dog", 3]];

// Altere apenas o código abaixo desta linha
var removedFromMyArray = myArray.shift();