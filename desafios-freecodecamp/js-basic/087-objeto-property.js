/**
 * Atualizar propriedades do objeto
Depois de criar um objeto JavaScript, você pode atualizar suas propriedades a qualquer momento, como você atualizaria qualquer outra variável. Você pode usar notação de ponto ou colchete para atualizar.

Por exemplo, vamos dar uma olhada em ourDog:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
Como ele é um cachorro particularmente feliz, vamos mudar seu nome para o texto Happy Camper. Veja como atualizamos a propriedade name do objeto: ourDog.name = "Happy Camper"; ou ourDog["name"] = "Happy Camper"; Agora, quando avaliamos ourDog.name, em vez de obter Camper, teremos seu novo nome, Happy Camper.

Atualize a propriedade name do objeto myDog. Vamos alterar o valor da propriedade name dele de Coder para Happy Coder. Você pode usar notação de ponto ou de colchetes.


 */
// Configuração
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Altere apenas o código abaixo desta linha
  myDog.name = "Happy Coder";