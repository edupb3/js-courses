/**Verificar se tudo é verdadeiro
Verifique se o predicado (segundo argumento) é truthy em todos os elementos de uma coleção (primeiro argumento).

Em outras palavras, você recebe uma coleção de array de objetos. O predicado pre será uma propriedade de objeto e você precisa retornar true se seu valor for truthy. Caso contrário, retorne false.

Em JavaScript, valores truthy são valores que traduzem para true quando avaliados em um contexto booleano.

Lembre-se, você pode acessar propriedades de objeto através de notação de ponto ou notação []. */

function truthCheck(collection, pre) {
    const arrayTruthy = collection
              .map(el => Boolean(el[pre]))
              .some(el => el === false)  
    console.log(!arrayTruthy)            
    return !arrayTruthy;
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")