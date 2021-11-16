/**
 * Gerar frações aleatórias com JavaScript
Números aleatórios são úteis para criar comportamento aleatório.

JavaScript tem a função Math.random() que gera um número decimal aleatório entre 0 (incluso) e 1 (excluso). Assim, Math.random() pode retornar um 0 mas nunca retornará 1.

Observação: como ao armazenar valores com operador de atribuição, todas as chamadas de funções serão resolvidas antes de executar o return, para que possamos dar ao return o valor da função Math.random().

Altere randomFraction para retornar um número aleatório ao invés de retornar 0.


 */

function randomFraction() {

    // Altere apenas o código abaixo desta linha
  
    return Math.random();
  
    // Altere apenas o código acima desta linha
  }