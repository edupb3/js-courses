/**
 * Criar objetos JavaScript
Você talvez tenha ouvido o termo objeto antes.

Objetos são similares a arrays, exceto que, ao invés de usar índices para acessar e modificar seus dados, você acessa os dados em objetos através do que se chama propriedades.

Objetos são úteis para armazenar dados de forma estruturada e podem representar objetos do mundo real, como um gato.

Aqui está um exemplo de objeto gato:

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
Neste exemplo, todas as propriedades são armazenadas como strings, como name, legs e tails. Porém, você também pode usar números como propriedades. Você pode até omitir as aspas para propriedades de string com uma única palavra, da seguinte forma:

const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
No entanto, se seu objeto tem quaisquer propriedades que não sejam strings, o JavaScript automaticamente definirá seus tipos como strings.

Faça um objeto que representa um cachorro chamado myDog que contém as propriedades name (uma string), legs, tails e friends.

Você pode definir essas propriedades do objeto para os valores que deseja, contanto que name seja uma string, legs e tails sejam números, e friends seja um array.


 */

const myDog = {
    // Altere apenas o código abaixo desta linha
    name: "Mick",
    legs: 4,
    tails: 1,
    friends: ["Rex", "Maick", "Johny"]
    // Altere apenas o código acima desta linha
  };

  console.log(Object.entries(myDog));
  console.log(Object.keys(myDog));
  console.log(Object.values(myDog));