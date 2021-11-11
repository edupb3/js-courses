/**
 * Selecionar entre várias opções com instruções switch
Se você possui muitas opções pra escolher, use uma instrução switch. Uma instrução switch testa um valor e pode ter muitas instruções case as quais definem os diversos valores possíveis. As instruções são executadas desde o primeiro case correspondente até que seja encontrado um break.

Aqui está um exemplo de uma instrução switch:

switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
Valores case são testados com o operador de igualdade estrita (===). O break diz ao JavaScript parar interromper a execução das instruções. Se o break for omitido, a próxima instrução case será executada.

Escreva uma instrução switch que testa val e define answer para as seguintes condições:
1 - alpha
2 - beta
3 - gamma
4 - delta
 */

function caseInSwitch(val) {
    let answer = "";
    // Altere apenas o código abaixo desta linha
    switch (val){
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }
  
  
    // Altere apenas o código acima desta linha
    return answer;
  }
  
  caseInSwitch(1);