/**
 * 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
 */

function contaInteirosNegativos(numeros){
    let qtdNumNegativos = 0;
    qtdNumNegativos = el => el < 0 ;
    const result = numeros.filter(qtdNumNegativos)
    console.log(result.length);
}

contaInteirosNegativos([1,5,-8,-9,5,-6])