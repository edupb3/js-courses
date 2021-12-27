
function displayCharacter(quant, chararcter){
    let result = "";
    for (let i =1; i<=quant; i++){
        result += chararcter;
    }
    return result;
}

function staircase(n) {    
    let whiteSpaces = n - 1;
    let symbols = 1;
    for(let i=n; i > 0; i--){
        let ws = displayCharacter(whiteSpaces, " ");
        let s = displayCharacter(symbols, "#");
        whiteSpaces--;
        symbols++;
        console.log(ws+s);
    }
}
staircase(6);