/**
 * Entender variáveis não inicializadas
Quando as variáveis de JavaScript são declaradas, elas têm um valor inicial de undefined. Se você fizer uma operação matemática em uma variável undefined, seu resultado será NaN, o que significa que "Não é um número". Se você concatenar uma string com uma variável undefined, você receberá uma string literal de undefined.

Inicialize as três variáveis a, b e c com 5, 10, e "I am a" respectivamente para que eles não sejam undefined.
 */

// Altere apenas o código abaixo desta linha
var a;
var b;
var c;
a = 5;
b = 10;
c = "I am a";
// Altere apenas o código acima desta linha

a = a + 1;
b = b + 5;
c = c + " String!";

console.log(a, b, c);