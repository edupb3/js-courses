/**
 * 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

 */

function valorPlano(idade){
    let valor = 100;
    if (idade <= 10)
        return `R$ ${valor + 80}`
    if (10 < idade && idade <= 30)
        return `R$ ${valor + 50}`
    if (30 < idade && idade <= 60)
        return `R$ ${valor + 95}`
    if (idade > 60)
        return `R$ ${valor + 130}`
}

console.log(valorPlano(29));
console.log(valorPlano(39));
console.log(valorPlano(59));
console.log(valorPlano(12));
console.log(valorPlano(2));
console.log(valorPlano(65));

console.log((10 < 65 <= 30))