/**
 * 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
 */

function contagem(numeros){
    let numerosIntervalo = 0;
    let numerosForaIntervalo = 0;
    for (let index = 0; index < numeros.length; index++) {
        const element = numeros[index];
        if (element >= 10 && element <= 20){
            numerosIntervalo++;
        }else{
            numerosForaIntervalo++;
        }        
    }
    return {
        dentroIntervalo: numerosIntervalo,
        foraIntervalo: numerosForaIntervalo
    }
}

console.log(contagem([1,5,15,18,4,20,11]));