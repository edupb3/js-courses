/**
 * 15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.

 */

function verificaModelosCarro(modelo){
    switch(modelo){
        case("hatch"):
            return "Compra efetuada com sucesso";
            break;
        case("sedan"):
        case("motocicleta"):
        case("caminhonete"):
            return "Tem certeza que não prefere este modelo?"
            break;
        default:
            return "Não trabalhamos com este tipo de automovel aqui"
    }
}

console.log(verificaModelosCarro("hatch"));
console.log(verificaModelosCarro("sedan"));
console.log(verificaModelosCarro("motocicleta"));
console.log(verificaModelosCarro("caminhonete"));
console.log(verificaModelosCarro("van"));