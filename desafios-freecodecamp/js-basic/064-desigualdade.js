/**
 * Comparar com o operador de desigualdade estrita
O operador de desigualdade estrito (!==) é o oposto lógico do operador de igualdade estrito. Significa que "não é estritamente igual" e retorna false onde a igualdade estrita retornaria true e vice-versa. O operador de desigualdade estrita não converterá tipos de dados.

Exemplos

3 !==  3
3 !== '3'
4 !==  3
Em ordem, essas expressões seriam iguais à false, true e true.

Adicione o operador de desigualdade estrita ao comando if para que a função retorne a string Not Equal quando val não é estritamente igual a 17
 */

// Configuração
function testStrictNotEqual(val) {
    if (val!==17) { // Altere esta linha
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);