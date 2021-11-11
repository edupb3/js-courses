/**
 * Comparar com o operador de igualdade estrita
Igualdade estrita (===) é a contrapartida do operador de igualdade (==). No entanto, ao contrário do operador de igualdade, que tenta converter ambos os valores em comparação a um tipo comum, o operador estrito de igualdade não realiza uma conversão de tipo.

Se os valores que são comparados tiverem valores diferentes, são considerados desiguais, e o operador de igualdade estrito retornará falso.

Exemplos

3 ===  3
3 === '3'
Essas condições retornariam true e false, respectivamente.

No segundo exemplo, 3 é um tipo de Number e '3' é um tipo String.

Use o operador de igualdade estrita na instrução if, para que a função retorne a string Equal quando val for estritamente igual a 7
 */

// Configuração
function testStrict(val) {
    if (val === 7) { // Altere esta linha
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);