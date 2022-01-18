/**Somar todos os primos
Um número primo é um número natural maior que 1 com exatamente dois divisores: 1 e ele mesmo. Por exemplo, 2 é um número primo porque só é divisível por 1 e 2. Em contrapartida, 4 não é primo, uma vez que é divisível por 1, 2 e 4.

Reescreva sumPrimes para que ele retorne a soma de todos os números primos que são menores ou iguais a num. */

const isPrime = num => {
    for(let i=2; i < num; i++){
      if(num%i == 0){
        return false;
      } 
    }
    return true;
  }
  
const sum = (acc, el) => acc+ el;
  
function sumPrimes(num) {
const arrNumbers = [];
for(let i = 2; i <=num; i++){
    arrNumbers.push(i);
}
const primes = arrNumbers
    .filter(isPrime)
    .reduce(sum)
return primes;  
}
  
sumPrimes(977);