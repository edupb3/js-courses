/**Usar o rolo compressor
Achate um array aninhado. Você deve lidar com diferentes níveis de aninhamento.

*/

function steamrollArray(arr) {        
    const numbers = [];
    const removeBrackets = item => {                
        if (Array.isArray(item)){
            for(value of item){                
                removeBrackets(value);
            }            
        }else{            
            numbers.push(item);
        }        
    }

    for(el of arr){
        removeBrackets(el);
    }
    console.log(numbers);
    return numbers;
  }
  
  
  steamrollArray([[["a"]], [["b"]]]) //deve retornar ["a", "b"].

  steamrollArray([1, [2], [3, [[4]]]]) //deve retornar [1, 2, 3, 4].

  steamrollArray([1, [], [3, [[4]]]]) //deve retornar [1, 3, 4].

  steamrollArray([1, {}, [3, [[4]]]]) //deve retornar [1, {}, 3, 4].
  