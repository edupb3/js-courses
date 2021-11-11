/**
 * Conhecer o escopo global e funções
Em JavaScript, escopo refere-se à visibilidade de variáveis. Variáveis que são definidas fora de um bloco de função tem o escopo Global. Isso significa que elas podem ser vistas em qualquer lugar no seu código JavaScript.

Variáveis que são declaradas sem a palavra-chave var são automaticamente criadas no escopo global. Isso pode criar consequências indesejadas em outro lugar no seu código ou quando executar uma função novamente. Você sempre deve declarar suas variáveis com var.

Usando var, declare uma variável global chamada myGlobal fora de qualquer função. Inicialize-a com o valor de 10.

Dentro da função fun1, atribua 5 para oopsGlobal sem usar a palavra-chave var.


 */
// Declare a variável myGlobal abaixo desta linha
var myGlobal = 10;

function fun1() {
  // Atribua 5 para oopsGlobal aqui
  oopsGlobal = 5;

}
myGlobal = 10
// Altere apenas o código acima desta linha

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}