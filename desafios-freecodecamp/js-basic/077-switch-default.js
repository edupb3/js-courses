/**
 * Adicionar uma opção padrão em instruções switch
Na instrução switch, você não deve ser capaz de especificar todos os possíveis valores como instruções case. Ao invés disso, você pode adicionar a instrução default, que será executada se nenhuma instrução case correspondente for encontrada. Pense nisso como a instrução final else em uma cadeia de if/else.

A instrução default deve ser o último caso.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
Escreva a instrução switch para definir answer para as seguintes condições:
a - apple
b - bird
c - cat
default - stuff


 */

function switchOfStuff(val) {
    let answer = "";
    // Altere apenas o código abaixo desta linha
    switch (val){
        case 'a':
          answer = "apple";
          break;
        case 'b':
          answer = "bird";
          break;
        case 'c':
          answer = "cat";
          break;
        default:
          answer = "stuff";
          break;
      }
  
  
    // Altere apenas o código acima desta linha
    return answer;
  }
  
  console.log(switchOfStuff("d"));