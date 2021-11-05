/**
 * 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
 */

function maiorEMenorValor(numeros){
    const maiorValor = (acc, el) => Math.max(acc, el)
    const menorValor = (acc, el) => Math.min(acc, el)
    console.log(numeros.reduce(maiorValor));
    console.log(numeros.reduce(menorValor));
    
}

maiorEMenorValor([5,65,1,-8,8,9])