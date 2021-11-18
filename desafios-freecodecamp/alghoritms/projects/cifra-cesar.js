/**Cifra de César
Uma das cifras mais simples e mais conhecidas é a cifra de César, também conhecida como uma cifra de mudança. Em uma cifra de transferência, os significados das letras são deslocados de acordo com a quantidade definida.

Um uso moderno comum é a cifra ROT13, onde os valores das letras são deslocados em 13 lugares. Da seguinte forma: A ↔ N, B ↔ O e assim por diante.

Escreva uma função que recebe uma string codificada de ROT13 como entrada e retorna uma string decodificada.

Todas as letras serão maiúsculas. Não transforme nenhum caractere não-alfabético (ou seja, espaços, pontuação), mas passe por eles. */

function rot13(str) {
    str = str.toLowerCase();
    const vet1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
    const vet2 = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let rev = str.split("");
    let indexArr1;
    let indexArr2;
    let ret = [];
    for( let i in rev){
        indexArr1 = vet1.indexOf(rev[i]);
        indexArr2 = vet2.indexOf(rev[i]);
        indexArr1 !== -1 ? ret.push(vet2[indexArr1]) : indexArr2 !== -1 ? ret.push(vet1[indexArr2]) : ret.push(rev[i]);
    }
    console.log(ret.join("").toUpperCase());
    
    return ret.join("").toUpperCase();
  }
  
  rot13("SERR CVMMN!")


// rot13("SERR PBQR PNZC") deve decodificar para a string FREE CODE CAMP

// rot13("SERR CVMMN!") deve decodificar para a string FREE PIZZA!

// rot13("SERR YBIR?") deve decodificar para a string FREE LOVE?

// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")deve decodificar para a string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.