/**
 * Usar recursão para criar um intervalo de números
Continuando do desafio anterior, fornecemos a você outra oportunidade para criar uma função recursiva para resolver um problema.

Definimos uma função chamada rangeOfNumbers com dois parâmetros. A função deve retornar um array de inteiros a qual começa com um número representado pelo parâmetro startNum e terminar com um número representado pelo parâmetro endNum. O número inicial sempre será menor ou igual ao número final. Sua função precisa usar recursão para chamar a si mesma e não deve depender de nenhum tipo de laço. Também deve funcionar para casos onde startNum e endNum tiverem o mesmo valor.
 */
let ret = [];
function rangeOfNumbers(startNum, endNum) {
    
    if (startNum === endNum){
        ret.push(startNum);
    }else{
        ret.push(startNum);
        rangeOfNumbers(startNum+1, endNum);
    }
    return ret;
  };

  //console.log(rangeOfNumbers(4, 4) );
  console.log(rangeOfNumbers(6, 9) );