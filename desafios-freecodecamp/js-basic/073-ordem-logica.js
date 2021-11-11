/**
 * Usar a ordem lógica em instruções if else
A ordem é importante em instruções if e else if.

A função é executada de cima para baixo, então você deve ser cuidadoso com qual instrução vem primeiro.

Tomemos como exemplo estas duas funções.

Aqui está a primeira:

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
A segunda apenas altera a ordem das instruções if e else if:

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
Embora as duas funções pareçam praticamente idênticas, se passarmos um número para ambas, teremos saídas diferentes.

foo(0)
bar(0)
foo(0) retornará a string Less than one e bar(0) retornará a string Less than two.

Altere a ordem lógica na função para que retorne as instruções corretas em todos os cenários.
 */

function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    }else if (val < 10) {
      return "Less than 10";
    }else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);