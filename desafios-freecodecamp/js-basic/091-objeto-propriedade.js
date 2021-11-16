/**
 * Testar objetos por propriedades
Às vezes, é útil verificar se a propriedade de um determinado objeto existe ou não. Podemos usar o método de objetos .hasOwnProperty(propname) para determinar se aquele objeto possui o nome de propriedade fornecido. .hasOwnProperty() retorna true ou false se a propriedade for encontrada ou não.

Exemplo

const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
O primeiro hasOwnProperty retorna true, enquanto o segundo retorna false.

Modifique a função checkObj para verificar se um objeto passado para a função (obj) contém uma propriedade específica (checkProp). Se a propriedade for encontrada, retorne o valor da propriedade. Se não, retorne "Not Found".


 */
function checkObj(obj, checkProp) {
    // Altere apenas o código abaixo desta linha
    if (obj.hasOwnProperty(checkProp))
      return obj[checkProp];
  
    return "Not Found";
    // Altere apenas o código acima desta linha
  }