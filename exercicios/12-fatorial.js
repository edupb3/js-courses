/**
 * 12) Faça um algoritmo que calcule o fatorial de um número.

 */

function calcularFatorial(numero){
    let fatorial = [];
    const calcula = (acc, el) => acc = acc * el
    for (let i = numero; i > 0; i--) {
        fatorial.push(i)
    }    
    console.log(fatorial.reduce(calcula));
}

calcularFatorial(10);