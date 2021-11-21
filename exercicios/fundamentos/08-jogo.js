/**
 * 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)

 */

function verificaDesempenho(pontuacoesString){    
    let pontuacoes = pontuacoesString.split(" ")    
    let maiorPontuacao = parseInt(pontuacoes[0]);
    let menorPontuacao = parseInt(pontuacoes[0]);
    let quebraRecords = 0;
    let piorJogo = 1;

    for (let index = 1; index < pontuacoes.length; index++) {        
        if(parseInt(pontuacoes[index]) > parseInt(maiorPontuacao)){            
            maiorPontuacao = parseInt(pontuacoes[index]);            
            quebraRecords++;
        }
        else if(parseInt(pontuacoes[index]) < parseInt(menorPontuacao)){     
            menorPontuacao = pontuacoes[index]                   
            piorJogo = index+1;            
        }        
    }
    
    
   return [quebraRecords, piorJogo];    
   
}

console.log(verificaDesempenho("10 20 20 8 25 3 0 30 1"))
console.log(verificaDesempenho("30 40 20 4 51 25 42 38 56 0"))