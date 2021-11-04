/**
 * 17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

 */

function verificarPlanoTrabalho(plano, salárioAtual){
    let percent;
    switch(plano){
        case ("A"):
            percent = 10;
            break;
        case ("B"):
            percent = 15;
            break;
        case ("C"):
            percent = 20;
            break;
        default:
            return "Plano Inválido"
    }
    return salárioAtual * (1 + percent/100)
}

console.log(verificarPlanoTrabalho("A", 10000));
console.log(verificarPlanoTrabalho("B", 10000));
console.log(verificarPlanoTrabalho("C", 10000));
console.log(verificarPlanoTrabalho("X", 10000));