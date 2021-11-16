/**
 * Usar operadores de múltiplas condições (ternários)
No desafio anterior, você usou um único operador condicional. Você também pode encadear eles juntos para verificar por múltiplas condições.

A seguinte função usa as instruções if, else if e else para verificar múltiplas condições:

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
A função acima pode ser rescrita usando operadores de múltiplas condições (operador ternário):

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
É considerada a melhor prática para formatar operadores de múltiplas condições, já que cada condição está em uma linha separada, como mostrado acima. Usar operadores de múltiplas condições sem a indentação adequada pode dificultar a leitura do seu código. Por exemplo:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
Na função checkSign, use operadores de múltiplas condições - seguindo o formato recomendado usado em findGreaterOrEqual - para verificar se um número é positivo, negativo ou zero. A função deve retornar positive, negative ou zero.


 */
function checkSign(num) {
    return (num > 0 ? "positive": (num === 0 ? "zero" : "negative"))
  }
  
  checkSign(10);