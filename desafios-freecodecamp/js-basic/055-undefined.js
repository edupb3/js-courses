/**
 * Entender o valor undefined retornado de uma função
Uma função pode incluir a instrução return mas ela não precisa fazer isso. No caso de a função não ter uma instrução return, quando você a chamar, a função processa o código interno, mas o valor retornado é undefined.

Exemplo

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
addSum é uma função sem uma instrução return. A função vai alterar a variável global sum, mas o valor retornado da função é undefined.

Crie uma função addFive sem qualquer argumento. Essa função adiciona 5 à variávelsum, mas o valor retornado é undefined.
 */
// Configuração
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Altere apenas o código abaixo desta linha
function addFive(){
  sum = sum + 5;
}

// Altere apenas o código acima desta linha

addThree();
addFive();