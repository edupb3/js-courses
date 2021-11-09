/**
 * Diferenciar entre as palavras-chave var e let
Um dos maiores problemas ao declarar variáveis com a palavra-chave var é que você pode sobrescrever a declaração da variável sem perceber.

var camper = 'James';
var camper = 'David';
console.log(camper);
Aqui o console vai exibir a string David.

Como você pode ver no código acima, a variável camper é originalmente declarada com o valor James e então substituída pelo valor David. Em uma aplicação pequena, você pode não encontrar esse tipo de problema, mas quando seu código se tornar maior, você pode acidentalmente sobrescrever uma variável que você não tinha a intenção. Como esse comportamento não lança nenhum erro, procurar e corrigir bugs se torna mais difícil.
Para resolver esse potencial problema com a palavra-chave var, uma nova palavra-chave chamada let foi introduzida no ES6. Se você tentar substituir var por let nas declarações de variável do código acima, o resultado será um erro.

let camper = 'James';
let camper = 'David';
Esse erro pode ser visto no console do seu navegador. Então, diferente de var, ao usar let, uma variável com o mesmo nome só pode ser declarada uma única vez. Note o "use strict". Isso habilita o Modo Estrito, o qual captura erros de codificação comum e ações "não seguras". Por exemplo:

"use strict";
x = 3.14;
O código acima vai exibir o erro: x is not defined.

Atualize o código para que apenas a palavra-chave let seja usada.
 */

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();