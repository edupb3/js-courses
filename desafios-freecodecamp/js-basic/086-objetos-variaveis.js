/**
 * Acessar propriedades de objetos com variáveis
Outro uso de notação de colchetes em objetos é para acessar a propriedade a qual está armazenada como o valor de uma variável. Isso pode ser muito útil para iterar através das propriedades de um objeto ou quando acessando uma tabela de pesquisa.

Aqui está um exemplo de usar uma variável para acessar uma propriedade:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
A string Doberman seria exibida no console.

Outra forma de você usar esse conceito é quando o nome da propriedade é coletado dinamicamente, durante a execução do programa, da seguinte forma:

const someObj = {
  propName: "John"
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);
someProp teria o valor da string propName e a string John seria exibida no console.

Observe que não usamos aspas em torno do nome da variável ao usá-la para acessar a propriedade, porque estamos usando o valor da variável, e não o nome.

Defina a variável playerNumber para ser 16. Então, use a variável para procurar o nome do jogador e atribuí-la a player.


 */

// Configuração
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Altere apenas o código abaixo desta linha
  const playerNumber = 16;  // Altere esta linha
  const player = testObj[playerNumber];   // Altere esta linha