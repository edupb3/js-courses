/**
 * Acessar arrays aninhados
Como vimos em exemplos anteriores, objetos podem conter tanto objetos aninhados quanto arrays aninhados. Semelhante ao acesso de objetos aninhados, a notação de colchetes pode ser encadeada para se acessar arrays aninhados.

Aqui está um exemplo de como se acessar um array aninhado:

const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];
ourPets[0].names[1] seria a string Fluffy e ourPets[1].names[0] seria a string Spot.

Usando a notação de ponto e de colchetes, defina a variável secondTree para o segundo item na lista de trees do objeto myPlants.
 */

const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];

  console.log(secondTree);