/**
 * 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
 */

function multiplicação(vetor, numero){
    const mult = el => el * numero;
    return vetor.map(mult);
}

function multiplicaçãoMaiorQueCinco(vetor, numero){
    const mult = el => numero > 5 ? el * numero: el;
    return vetor.map(mult);
}

console.log(multiplicação([2,3,2],2));
console.log(multiplicaçãoMaiorQueCinco([2,3,2],2));
console.log(multiplicaçãoMaiorQueCinco([2,3,2],6));