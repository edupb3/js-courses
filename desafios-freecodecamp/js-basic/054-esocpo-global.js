/**
 * Diferenciar escopo global e local em funções
É possível ter as variáveis local e global com o mesmo nome. Quando você faz isso, a variável local tem precedência sobre a variável global.

Neste exemplo:

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
A função myFun retornará a string Head porque a versão local da variável está presente.

Adicione uma variável local para a função myOutfit para sobrescrever o valor de outerWear com a string sweater
 */

// Configuração
const outerWear = "T-Shirt";

function myOutfit() {
  // Altere apenas o código abaixo desta linha
  var outerWear = "sweater";
  // Altere apenas o código acima desta linha
  return outerWear;
}

console.log(myOutfit())