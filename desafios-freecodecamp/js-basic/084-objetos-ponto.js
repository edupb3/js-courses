/**
 * Acessar propriedades de objetos com notação de pontos
Existem duas formas para acessar as propriedades de um objeto: notação de ponto (.) e notação de colchetes ([]), de forma similar a um array.

Notação de ponto é o que você utiliza quando você sabe o nome da propriedade que você está tentando acessar antecipadamente.

Aqui está um exemplo usando notação de ponto (.) para ler uma propriedade do objeto:

const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
prop1val teria o valor val1 e prop2val teria o valor val2.

Leia os valores de propriedade de testObj usando a notação de ponto. Defina a variável hatValue igual à propriedade hat do objeto e defina a variável shirtValue igual à propriedade shirt do objeto.


 */

// Configuração
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Altere apenas o código abaixo desta linha
  const hatValue = testObj.hat;      // Altere esta linha
  const shirtValue = testObj.shirt;    // Altere esta linha