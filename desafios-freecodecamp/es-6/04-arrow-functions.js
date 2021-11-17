/**Criar funções anônimas com arrow functions
No JavaScript, muitas vezes não precisamos nomear nossas funções, especialmente quando passamos uma função como argumento para outra função. Em vez disso, criamos funções anônimas. Como não vamos reutilizar essas funções posteriormente, não precisamos nomeá-las.

Para fazer isso, geralmente usamos a seguinte sintaxe:

const myFunc = function() {
  const myVar = "value";
  return myVar;
}
ES6 nos fornece um syntatical sugar onde não precisamos escrever funções anônimas como no exemplo acima. Ao invés disso, você pode usar a sintaxe arrow function:

const myFunc = () => {
  const myVar = "value";
  return myVar;
}
Quando a função executa apenas uma linha de código ou retorna apenas um valor, a sintaxe de arrow function nos permite omitir a palavra-chave return assim como as chaves ao redor do código. Essa abordagem ajuda a criar funções menores em instruções de uma linha:

const myFunc = () => "value";
Esse código ainda retornará a string value por padrão.

Rescreva a função atribuída à variável magic usando a sintaxe de arrow function. A função deve retornar new Date(). Além disso, garanta que nada seja definido usando a palavra-chave var.

 */
const magic = () =>new Date();