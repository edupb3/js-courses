/**
 * 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
 */

function exibirQuantidadeParesImpares(vetor){
    let qtdPares = 0;
    let qtdImpares = 0;
    vetor.forEach(element => {
        if (element % 2 === 0){
            qtdPares++
        }else{
            qtdImpares++
        }
    });
    return `Quantidade de números pares: ${qtdPares}
            Quantidade de números ímpares: ${qtdImpares}`
}

console.log(exibirQuantidadeParesImpares([5,6,8,74,15,48,75]));