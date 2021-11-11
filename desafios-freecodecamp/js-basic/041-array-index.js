/**
 * Acessar array de dados com índices
Podemos acessar os dados dentro de arrays usando indexes.

Os índices de um array são escritos na mesma notação com colchetes que as strings usam. Porém, em vez de especificar um caractere, eles estão especificando um item do array. Assim como ocorre com as strings, os arrays usam indexação de base zero, de forma que o primeiro elemento de um array possui índice 0.


Exemplo

const array = [50, 60, 70];
array[0];
const data = array[1];
array[0] agora é 50 e data tem o valor 60.

Observação: não deve haver nenhum espaço entre o nome do array e os colchetes, como array [0]. Embora JavaScript seja capaz de processar isso corretamente, isso pode confundir outros programadores lendo seu código.

Crie uma variável chamada myData e defina-a como igual ao primeiro valor de myArray usando notação de colchetes.

 */

const myArray = [50, 60, 70];

const myData = myArray[0]