/**Encontrar as letras faltando
Encontre a letra que falta no intervalo de letras passado e devolva-a.

Se todas as letras estiverem presentes no intervalo, retorne undefined. */

function fearNotLetter(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    if (str === alphabet){
        return console.log(undefined);
    }        

    let arrStr = str.split("");
    if (alphabet.includes(str)){        
        return console.log(alphabet[alphabet.indexOf(str) + str.length]);
    }else {        
        arrStr.pop();
        return fearNotLetter(arrStr.join(""));        
    } 

    return str;
  }
  
  fearNotLetter("abce");
  fearNotLetter("abcdefghjklmno");
  fearNotLetter("stvwx");
  fearNotLetter("bcdf");
  fearNotLetter("abcdefghijklmnopqrstuvwxyz");