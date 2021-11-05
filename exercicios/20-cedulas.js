/**
 * 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

*/
let notas = [];    

function sacarDinheiro(valor, cedula=100){    
    if(cedula === 100){
        notas = []
    }
    let cedulas = valor / cedula    
    let resto = valor % cedula

    if (parseInt(cedulas) >= 1 ){
        notas.push(`${parseInt(cedulas)} nota(s) de R$ ${cedula}`)         
    }    
    if (resto >= 50){
        sacarDinheiro(resto, 50)
    }
    else if (resto >= 10){
        sacarDinheiro(resto, 10)
    }
    else if (resto >= 5){
        sacarDinheiro(resto, 5)
    }
    else if (resto >= 1){
        sacarDinheiro(resto, 1)
    }
    
    return notas   

}
console.log(sacarDinheiro(859));
console.log(sacarDinheiro(912));
console.log(sacarDinheiro(89));
console.log(sacarDinheiro(17));
console.log(sacarDinheiro(6));
console.log(sacarDinheiro(2));
