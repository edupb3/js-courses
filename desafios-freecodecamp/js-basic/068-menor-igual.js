/**
 * Comparar com o operador menor ou igual
O operador menor ou igual (<=) compara os valores de dois números. Se o número à esquerda for menor ou igual ao número à direita, retornará true. Se o número à esquerda for maior que o número a direita, retornará false. Assim como o operador de igualdade, o operador de menor ou igual que converte os tipos de dados.

Exemplos

4   <= 5
'7' <= 7
5   <= 5
3   <= 2
'8' <= 4
Em ordem, essas expressões seriam iguais à true, true, true, false e false.

Adicione o operador menor ou igual que para indicar as linhas para que as instruções de retorno façam sentido.
 */

function testLessOrEqual(val) {
    if (val <= 12) {  // Altere esta linha
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Altere esta linha
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);