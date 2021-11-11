/**
 * Introduzir instruções else
Quando uma condição para uma instrução if for verdadeira, o bloco de código seguinte será executado. E quando a condição for falsa? Normalmente, nada aconteceria. Com uma instrução else, um bloco de código alternativo pode ser executado.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
Combine as instruções if em uma única instrução if/else.
 */

function testElse(val) {
    let result = "";
    // Altere apenas o código abaixo desta linha
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    else {
      result = "5 or Smaller";
    }
  
    // Altere apenas o código acima desta linha
    return result;
  }
  
  testElse(4);