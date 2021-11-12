/**
 * Adicionar novas propriedades para um objeto JavaScript
Você pode adicionar novas propriedades para um objeto JavaScript existente da mesma forma pela qual você os modificaria.

Aqui está como adicionaríamos uma propriedade bark para ourDog:

ourDog.bark = "bow-wow";
ou

ourDog["bark"] = "bow-wow";
Agora, quando acessamos ourDog.bark, nós teremos o seu latido, bow-wow.

Exemplo:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
Adicione a propriedade bark para myDog e defina-a para um som de um cachorro, como "woof". Você pode usar tanto notação de ponto quando de colchetes.
 */

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog.bark = "woof";
  console.log(myDog);