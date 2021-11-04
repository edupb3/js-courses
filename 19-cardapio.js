/**
 * 19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.

 */
function acessarCardapio(codigoProduto, quantidade){
    switch(codigoProduto){
        case(100):
            return 3.00 * quantidade;
        case(200):
            return 4.00 * quantidade;
        case(300):
            return 5.50 * quantidade;
        case(400):
            return 7.50 * quantidade;
        case(500):
            return 3.50 * quantidade;
        case(600):
            return 2.80 * quantidade;
        default:
            return "Produto não existente"
    }
}

console.log(acessarCardapio(100, 4));
console.log(acessarCardapio(200, 5));
console.log(acessarCardapio(300, 4));
console.log(acessarCardapio(400, 5));
console.log(acessarCardapio(100, 41));
console.log(acessarCardapio(500, 15));
console.log(acessarCardapio(600, 8));
console.log(acessarCardapio(900, 5));

