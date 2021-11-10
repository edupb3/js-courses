/**
 * Entender a imutabilidade das strings
Em JavaScript, valores String são imutáveis, o que significa que elas não podem ser alteradas após serem criadas.

Por exemplo, o código a seguir:

let myStr = "Bob";
myStr[0] = "J";
não permite alterar o valor de myStr para Job, porque o conteúdo de myStr não pode ser alterado. Note que isso não significa que myStr não pode ser alterado, apenas que os caracteres individuais de uma string literal não podem ser alterados. A única forma de alterar myStr seria atribuindo a ela uma nova string, dessa forma:

let myStr = "Bob";
myStr = "Job";
Corrija a atribuição para myStr para que contenha o valor Hello World (string) usando a abordagem mostrada no exemplo acima.
 */
// Configuração
let myStr = "Jello World";

// Altere apenas o código abaixo desta linha
myStr = "Hello World";
//myStr[0] = "H"; // Altere esta linha
// Altere apenas o código acima desta linha