/**
 * Contar cartas
No jogo de casino Blackjack, um jogador pode ganhar vantagem sobre a casa, mantendo o número relativo de cartas altas e baixas restantes no baralho. Isso se chama contagem de cartas.

Ter cartas mais altas restantes no baralho favorece o jogador. A cada carta é atribuído um valor de acordo com a tabela abaixo. Quando o contador for positivo, o jogador deve apostar alto. Quando a contagem for zero ou negativa, o jogador deverá apostar baixo.

Mudança na contagem	Cartas
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
Você vai escrever uma função de contagem de cartas. A função receberá um parâmetro card, que pode ser um número ou uma string, e incrementar ou decrementar a variável global count de acordo com o valor da carta (veja a tabela). Em seguida, a função retornará a string com o valor atual de contagem (variável count) e a string Bet se a contagem for positiva, ou Hold se a contagem for zero ou negativa. A contagem atual e a decisão do jogador (Bet ou Hold) deve ser separado por um único espaço.

Exemplo de saída: -3 Hold ou 5 Bet

Dica
NÃO redefina o valor de count para 0 quando o valor for 7, 8, ou 9. Não retorne um array.
Não inclua aspas (simples ou duplas) na saída.


 */

let count = 0;

function cc(card) {
  // Altere apenas o código abaixo desta linha
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  if (count > 0)
    return count + " Bet";
  else 
    return count + " Hold";

  
  // Altere apenas o código acima desta linha
}

cc(2); cc(3); cc(7); cc('K'); cc('A');