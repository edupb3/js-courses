/**Conversor de numerais romanos
Converta o número dado em um número romano.

Todas as respostas de números romanos devem ser fornecidas em maiúsculas.
 */

function convertToRoman(num) {    
    let roman="";
    let lookup = {
        M: 1000,
        CM: 900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    }    
    for(let i in lookup){        
        while (num >= lookup[i]){
            roman += i;
            num -= lookup[i];
        }
    }
    return roman;
   }
   
   console.log(convertToRoman(36));