/**
 * Acessar arrays multidimensionais com índices
Uma maneira de pensar em um array multidimensional é como um array de arrays. Quando você usa colchetes para acessar seu array, o primeiro conjunto de colchetes se refere às entradas no array mais exterior (o primeiro nível), e cada par adicional de colchetes refere-se ao próximo nível de entradas interno.

Exemplo

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

arr[3];
arr[3][0];
arr[3][0][1];
arr[3] é [[10, 11, 12], 13, 14], arr[3][0] é [10, 11, 12], e arr[3][0][1] é 11.

Observação: não deve haver nenhum espaço entre o nome do array e os colchetes como array [0][0] e até mesmo array [0] [0] não é permitido. Embora JavaScript seja capaz de processar isso corretamente, isso pode confundir outros programadores lendo seu código.

Utilizando notação de colchetes, selecione um elemento de myArray de forma que myData seja igual a 8.
 */

  const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1]

  console.log(myData);