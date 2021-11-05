/**
 * 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros
 */

function calculaMedia(numeros){
    const qtdNumeros = numeros.length;
    const soma = (acc, el) => acc + el;
    const total = numeros.reduce(soma);
    return total/qtdNumeros;
}

console.log(calculaMedia([2,5,10,20,3]));