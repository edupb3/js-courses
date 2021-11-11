/**
 * Praticar a comparação de diferentes valores
Nos últimos dois desafios, aprendemos sobre o operador de igualdade (==) e o operador de igualdade estrita (===). Vamos fazer uma breve revisão e praticar usando esses operadores mais uma vez.

Se os valores sendo comparados não são do mesmo tipo, o operador de igualdade fará a conversão de tipo e, então, avaliará os valores. No entanto, o operador de igualdade estrita vai comparar ambos os tipos de dados e os valores, sem converter de um tipo para outro.

Exemplos

3 == '3' retorna true porque JavaScript faz a conversão de tipo de string para número. 3 === '3' retorna falso porque os tipos são diferentes e não é feita a conversão de tipo.

Observação: em JavaScript, você pode determinar o tipo de uma variável ou de um valor, com o operador typeof, como vemos a seguir:

typeof 3
typeof '3'
typeof 3 retorna a string number e typeof '3' retorna a string string.

A função compareEquality no editor compara dois valores usando o operador de igualdade. Modifique a função para que ela retorne a string Equal apenas quando os valores forem estritamente iguais.

 */
// Configuração
function compareEquality(a, b) {
    if (a === b) { // Altere esta linha
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");