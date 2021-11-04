/**
 * 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
 */


const soma = (a, b) => a + b;
const multiplicacao = (a, b) => a * b;
const subtracao = (a, b) => a - b;
const divisao = (a, b) => a / b;

function operar(valor1, valor2){
    console.log(`Soma: ${soma(valor1,valor2)}`);
    console.log(`Multiplicação: ${multiplicacao(valor1,valor2)}`);
    console.log(`Subtração: ${subtracao(valor1,valor2)}`);
    console.log(`Divisão: ${divisao(valor1,valor2)}`);
}

operar(2,3)