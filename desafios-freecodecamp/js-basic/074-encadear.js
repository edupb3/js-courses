/**Encadear instruções if else
Instruções if/else podem ser encadeadas por uma lógica complexa. Aqui está o pseudocódigo de várias instruções encadeadas if/else if:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
Escreva instruções encadeadas if/else if para atender às seguintes condições:

num < 5 - retorna Tiny
num < 10 - retorna Small
num < 15 - retorna Medium
num < 20 - retorna Large
num >= 20 - retorna Huge */

function testSize(num) {
    // Altere apenas o código abaixo desta linha
    if (num < 5){
      return "Tiny";
    }else if (num < 10){
      return "Small";
    }else if (num < 15){
      return "Medium";
    }else if (num < 20){
      return "Large";
    }else if (num >= 20){
      return "Huge";
    }
  
    return "Change Me";
    // Altere apenas o código acima desta linha
  }
  
  testSize(7);