/**Escrever funções declarativas concisas com ES6
Ao definir funções dentro de objetos em ES5, nós temos de usar a palavra-chave function como se segue:

const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
Com ES6, você pode remover a palavra-chave function e dois pontos ao definir funções em objetos. Aqui está um exemplo dessa sintaxe:

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
Refatore a função setGear dentro do objeto bicycle para usar a sintaxe curta descrita acima. */

// Altere apenas o código abaixo desta linha
const bicycle = {
    gear: 2,
    setGear(newGear) {
      return this.gear = newGear;
    }
  };
  // Altere apenas o código acima desta linha
  bicycle.setGear(3);
  console.log(bicycle.gear);