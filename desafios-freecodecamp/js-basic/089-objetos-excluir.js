/**
 * Excluir propriedades de um objeto JavaScript
Podemos também excluir propriedades de objetos dessa forma:

delete ourDog.bark;
Exemplo:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
Após a última linha mostrada acima, ourDog se parece com:

{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
Exclua a propriedade tails de myDog. Você pode usar tanto notação de ponto quanto notação de colchetes.


 */

// Configuração
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Altere apenas o código abaixo desta linha
  delete myDog.tails;