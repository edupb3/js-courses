/**
 * 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
 */

function mediaAluno(codigo, notas){
    let maiorNota = Math.max(notas[0], notas[1], notas[2])
    let total;
    if (maiorNota === notas[0]){
        total = (maiorNota*4 + notas[1]*3 + notas[2]*3) / 3
    }else if (maiorNota === notas[1]){
        total = (maiorNota*4 + notas[0]*3 + notas[2]*3) / 3
    }else if (maiorNota === notas[2]){
        total = (maiorNota*4 + notas[0]*3 + notas[1]*3) / 3
    }
    return {
        codigo,
        notas,
        media: total,
        situacao: (total >= 5 ? "Aprovado": "Reprovado")
    }
    
}

console.log(mediaAluno(1, [4.3, 6.7, 9.9]));