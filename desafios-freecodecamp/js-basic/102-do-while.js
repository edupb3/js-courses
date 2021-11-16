/**
 * Iterar com laços do...while em JavaScript
O próximo tipo de laço que você aprenderá é chamado de laço do...while. O laço do...while é chamado assim porque primeiro fará algo (do) ou executará algo uma vez dentro do bloco de código, não importando o que acontecer. Em seguida, continuará a executar o laço enquanto (while) a condição for true.

const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
O exemplo acima se comporta de forma similar a outros tipos de laços, e o array resultante se parecerá com [0,1,2,3,4]. No entanto, o que torna o laço do...while diferente de outros laços é como ele se comporta quando uma condição falha na primeira verificação. Vamos ver isso na prática: Aqui está um laço comum while que rodará o código no laço enquanto i < 5:

const ourArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}
Nesse exemplo, inicializamos o valor de ourArray como um array vazio e o valor de i sendo 5. Quando executamos o laço while, a condição é igual a false porque i não é menor que 5, portanto nós não executamos o código dentro do laço. O resultado é que ourArray terminará sem valores adicionados a ele, e ainda se parecerá com [] quando todas as linhas do código no exemplo acima forem completamente executadas. Agora, dê uma olhada no laço do...while:

const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
Nesse caso, nós inicializamos o valor de i para 5, assim como fizemos com o laço while. Quando chegamos na próxima linha, não há condição a ser analisada, então nós vamos ao código dentro das chaves e o executamos. Nós adicionaremos um único elemento ao array e então incrementamos i antes de chegarmos à verificação da condição. Quando nós finalmente temos o resultado da condição i < 5 na última linha, nós notamos que i agora é 6, o que não cumpre a verificação da condição, então nós saímos do laço e terminamos. Ao final do exemplo acima, o valor de ourArray é [5]. Essencialmente, um laço do...while garante que o código dentro do laço será executado pelo menos uma vez. Vamos tentar fazer um laço do...while funcionar inserindo valores em um array.

Altere o laço while no código para um laço do...while para que o laço adicione apenas o número 10 no myArray e i será igual a 11 quando seu código terminar de rodar.
 */

// Configuração
const myArray = [];
let i = 10;

// Altere apenas o código abaixo desta linha
do{
myArray.push(i);
  i++;
}while (i < 10) ;