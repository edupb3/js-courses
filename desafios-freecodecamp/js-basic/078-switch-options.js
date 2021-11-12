/**
 * Lidar com várias opções idênticas em instruções switch
Se a instrução break for omitida de uma instrução case de um switch, as instruções case seguintes serão executadas até que seja encontrado um break. Se você tem várias entradas com a mesma saída, você pode representá-las em uma instrução switch da seguinte forma:

let result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
Todos os casos para 1, 2 e 3 vão produzir o mesmo resultado.

Escreva uma instrução para definir answer para os seguintes intervalos:
1-3 - Low
4-6 - Mid
7-9 - High

Observação: você precisará ter uma instrução case para cada número no intervalo.
 */

function sequentialSizes(val) {
    let answer = "";
    // Altere apenas o código abaixo desta linha
  
    switch (val){
          case 1:
          case 2:
          case 3:
            answer = "Low";
            break;
          case 4:
          case 5:
          case 6:
            answer = "Mid";
            break;
          case 7:
          case 8:
          case 9:
            answer = "High";
            break;
          default:
            answer = "stuff";
            break;
        }
  
    // Altere apenas o código acima desta linha
    return answer;
  }
  
  sequentialSizes(1);