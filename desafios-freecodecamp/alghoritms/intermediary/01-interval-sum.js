/**Somar todos os números em um intervalo
Vamos passar um array de dois números. Retorne a soma desses dois números mais a soma de todos os números entre eles. O menor número nem sempre chegará primeiro.

Por exemplo, sumAll([4,1]) deve retornar 10 porque a soma de todos os números entre 1 e 4 (ambos incluídos) é 10.

 */
function sumAll(arr) {  
    let maior = Math.max(... arr);
    let menor = Math.min(... arr);
    let result = [];
    for (let i = menor; i <= maior; i++){
      result.push(i)
    }  
    return result.reduce((acc, el) => acc + el);
    
  }
  
  sumAll([1, 4]);