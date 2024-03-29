/**
 * Iterar com laços for em JavaScript
Você pode rodar o mesmo código várias vezes usando um laço.

O tipo mais comum de laço JavaScript é chamado de laço for, porque ele é executado por um número especificado de vezes.

Laços for são declarados com três expressões opcionais separadas por ponto e vírgula:

for (a; b; c), onde a é a declaração de inicialização, b é a declaração de condição, e c é a expressão final.

A declaração de inicialização é executada apenas uma vez antes de o laço iniciar. Normalmente, é usada para definir e configurar sua variável de laço.

A declaração de condição é verificada no início de cada iteração do laço e vai continuar enquanto seu valor for true. Quando a condição for false no início da iteração, o laço vai parar de executar. Isso significa que se a condição de início for falsa, seu laço nunca será executado.

A expressão final é executada no final de cada iteração do laço, antes da verificação da próxima condição e normalmente é usada para incrementar ou decrementar o contador do laço.

No exemplo a seguir, inicializamos com i = 0 e iteramos enquanto nossa condição i < 5 for verdadeira. Nós incrementaremos i em 1 em cada iteração do laço com i++ como nossa expressão final.

const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
ourArray agora terá o valor de [0, 1, 2, 3, 4].

Use o laço for para adicionar os valores de 1 até 5 dentro de myArray.


 */
// Configuração
const myArray = [];
for(let i = 1; i <=5; i++){
  myArray.push(i)
}
// Altere apenas o código abaixo desta linha
