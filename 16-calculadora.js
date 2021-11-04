/**
 * 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas
 */

function calcular(a, operacao, b){
    switch(operacao){
        case ("+"):
            return a + b;
            break;
        case ("-"):
            return a - b;
            break;
        case ("*"):
            return a * b;
            break;
        case ("/"):
            return a / b;
            break;
        default:
            return "Operação inválida"
    }
}

console.log(calcular(2, "+", 3));
console.log(calcular(3, "-", 1));
console.log(calcular(2, "*", 3));
console.log(calcular(6, "/", 3));
console.log(calcular(2, "%", 3));