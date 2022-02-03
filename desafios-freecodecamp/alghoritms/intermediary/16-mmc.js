/**Encontrar o menor múltiplo comum
Encontre o menor múltiplo comum dos parâmetros fornecidos que podem ser divididos sem resto por ambos, bem como por todos os números sequenciais no intervalo entre esses parâmetros.

O intervalo será um array de dois números que não estará necessariamente em ordem numérica.

Por exemplo, se forem dados 1 e 3, encontre o menor múltiplo comum de 1 e 3 que também é divisível por todos os números entre 1 e 3. A resposta aqui seria 6. */

function smallestCommons(arr) {
    const [number1, number2] = arr;

    const smaller = Math.min(number1, number2);
    const greatter = Math.max(number1, number2);

    const intervalComplete = (min, max) => {
      const result = [];
      for( let i = min; i<= max; i++){
        result.push(i);
      }
      return result;
    }

    const divisors = [];
    const multiplyItems = (acc, item) => acc * item;

    const mmcCalculate = (numbers, divisor) => {
      const result = [];            
      
      divisors.push(divisor);
      for(el of numbers){        
        if(el % divisor === 0 ){
          result.push(el / divisor )
        }else{
          result.push(el)
        }
      }
      const changeDivisor = JSON.stringify(result)==JSON.stringify(numbers);
      changeDivisor ? divisors.pop() : "";
      
      if (numbers.reduce(multiplyItems) === 1){
        return ;
      }      

      mmcCalculate(result, changeDivisor ? ++divisor : divisor);       
    }

    const numbers = intervalComplete(smaller, greatter);
    mmcCalculate(numbers, 2);
    console.log(divisors.reduce(multiplyItems));    
  }
  
  smallestCommons([1, 5]);   //deve retornar um número.
  smallestCommons([5, 1]);   //deve retornar 60.
  smallestCommons([5, 1]);   // deve retornar 60.
  smallestCommons([2, 10]);  // deve retornar 2520.
  smallestCommons([1, 13]);  // deve retornar 360360.
  smallestCommons([23, 18]); // retornará 6056820.

  /*
  smallestCommons([1, 5]) deve retornar 60.

smallestCommons([5, 1]) deve retornar 60.

smallestCommons([2, 10]) deve retornar 2520.

smallestCommons([1, 13]) deve retornar 360360.

smallestCommons([23, 18]) retornará 6056820.

*/