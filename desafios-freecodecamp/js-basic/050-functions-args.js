/**
 * Passar valores para funções com argumentos
Parâmetros são variáveis que atuam como espaços reservados para os valores que são passados para uma função, quando ela é chamada. Quando uma função é definida, normalmente ela é definida junto com um ou mais parâmetros. Os valores reais que são entradas de (ou "passadas" para) uma função quando ela é chamada são conhecidos como argumentos.

Aqui está uma função com dois parâmetros, param1 e param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}
Então podemos chamar o testFun dessa forma: testFun("Hello", "World");. Passamos dois argumentos do tipo string, Hello e World. Dentro da função, param1 será igual à string Hello e param2 será igual à string World. Note que você poderia chamar o testFun novamente com diferentes argumentos e os parâmetros assumiriam o valor dos novos argumentos.

Crie uma função chamada functionWithArgs que aceita dois argumentos e exibe seus valores no console de desenvolvimento.
Chame a função com dois números como argumentos.
 */
function functionWithArgs(param1, param2){
    console.log(param1 + param2);
  }
  
  functionWithArgs(1,2) ;