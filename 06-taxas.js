/**
 * 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */

function calculaJurosSimples(capitalInicial, taxa, tempo){
    const juros = capitalInicial * taxa * tempo;
    const montante = capitalInicial + juros;
    return montante;
}

function calculaJurosCompostos(capitalInicial, taxa, tempo){
    const juros = capitalInicial * ((1 + taxa) ** tempo)
    const montante =  juros;
    return montante.toFixed(2);
}

console.log(calculaJurosSimples(5000,0.005, 20));
console.log(calculaJurosCompostos(3000,0.025, 4));