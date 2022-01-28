/**Usar argumentos opcionais
Crie uma função que some dois argumentos juntos. Se apenas um argumento for fornecido, então retorne uma função que espera um argumento e retorna a sua soma.

Por exemplo, addTogether(2, 3) deve retornar 5 e addTogether(2) deve retornar uma função.

Chamar essa função retornada com um argumento retornará a soma:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) retorna 5.

Se algum argumento não for um número válido, retorne undefined. */
function addTogether(value1, value2) {
    if (!Number.isInteger(value1)){
      return undefined;
    }
    if (!value2){    
      return param => addTogether(param, value1)
    }
    if (!Number.isInteger(value2)){
      return undefined;
    }
    return value1 + value2;
  }
addTogether(2, 3) //deve retornar 5.
/**
addTogether(23, 30) deve retornar 53.

addTogether(5)(7) deve retornar 12.

addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") deve retornar undefined.

addTogether(2, "3") deve retornar undefined.

addTogether(2)([3]) deve retornar undefined. */  