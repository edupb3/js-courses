/**
 * Conhecer o escopo local e funções
Variáveis que são declaradas dentro de uma função, assim como parâmetros das funções, possuem escopo local. Isso significa que elas são visíveis apenas dentro da função.

Aqui está uma função myTest com uma variável local chamada loc.

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
A chamada da função myTest() vai exibir a string foo no console. A linha console.log(loc) vai lançar um erro, já que loc não foi definido fora da função.

O editor possui dois console.log para ajudar você a ver o que está acontecendo. Verifique o console enquanto codifica para ver como muda. Declare uma variável local myVar dentro de myLocalScope e rode os testes.

Observação: o console ainda exibirá ReferenceError: myVar is not defined, mas isso não causará falha nos testes.
 */
function myLocalScope() {
    // Altere apenas o código abaixo desta linha
    var myVar = 10
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Executar e verificar o console
  // myVar não está definida fora do myLocalScope
  console.log('outside myLocalScope', myVar);