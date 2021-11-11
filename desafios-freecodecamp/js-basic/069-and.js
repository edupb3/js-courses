/**
 * Comparar com o operador lógico AND
Às vezes, você precisará testar mais de uma coisa de cada vez. O operador lógico AND (&&) retornará true apenas se os operadores à esquerda e à direita forem verdadeiros.

O mesmo efeito pode ser alcançado aninhando uma instrução if dentro de outro if:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
só retornará Yes se num for maior que 5 e menor que 10. A mesma lógica pode ser escrita assim:

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
Substitua as duas instruções if por uma declaração, usando o operador &&, que vai retornar a string Yes se val for menor ou igual a 50 e maior ou igual a 25. Caso contrário, retornará a string No.


 */

function testLogicalAnd(val) {
    // Altere apenas o código abaixo desta linha
  
    if (val <= 50 && val >= 25) {
      return "Yes";    
    }
  
    // Altere apenas o código acima desta linha
    return "No";
  }
  
  testLogicalAnd(10);