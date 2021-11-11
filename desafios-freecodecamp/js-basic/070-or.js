/**
 * Comparar com o operador lógico OR
O operador lógico OR (||) retorna true se qualquer um dos operandos for true. Caso contrário, retorna false.

O operador lógico ou é composto por dois símbolos de pipe: (||). Normalmente, ele pode ser encontrado entre as teclas Backspace e Enter.

O padrão abaixo deve parecer familiar aos pontos das passagens anteriores:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
retornará Yes apenas se num for entre 5 e 10 (5 e 10 incluídos). A mesma lógica pode ser escrita assim:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
Combine as duas instruções if em uma mesma instrução a qual retorna a string Outside se val não estiver entre 10 e 20, inclusos 10 e 20. Caso contrário, retorna a string Inside.


 */

function testLogicalOr(val) {
    // Altere apenas o código abaixo desta linha
  
    if (val < 10 || val > 20) {
      return "Outside";
    }
  
    // Altere apenas o código acima desta linha
    return "Inside";
  }
  
  testLogicalOr(15);