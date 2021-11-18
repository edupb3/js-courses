/**Verificador de palíndromo
Retorne true se a string fornecida for um palíndromo. Caso contrário, retorne false.

Um palíndromo é uma palavra ou frase que é dita da mesma maneira na ordem natural que na ordem inversa, ignorando pontuação, capitalização e espaçamento.

Observação: você precisará remover todos os caracteres não alfanuméricos (pontuação, espaços e símbolos) e transforme tudo na mesma capitalização (letra em minúsculo ou maiúsculo) para verificar se determinada palavra ou frase é um palíndromo.

Vamos passar strings em diferentes formatos, como racecar, RaceCarar e race CAR entre outros.

Nós também passaremos strings com símbolos especiais, como 2A3*3a2, 2A3 3a2 e 2_A3*3#A2. */

function palindrome(str) {
    let rev = [];
    let invert;
    str = str.replace(/[^a-z0-9]/gi, "");   
    
    rev = str.split("").reverse();
    invert = rev.join("");

    return invert.toUpperCase() === str.toUpperCase();
}

  
console.log(palindrome("eye"));
console.log(palindrome("eye"));// deve retornar um booleano.
console.log(palindrome("eye"));// deve retornar true.
console.log(palindrome("_eye"));// deve retornar true.
console.log(palindrome("race car"));// deve retornar true.
console.log(palindrome("not a palindrome"));// deve retornar false.
console.log(palindrome("A man, a plan, a canal. Panama"));// deve retornar true.
console.log(palindrome("never odd or even"));// deve retornar true.
console.log(palindrome("nope"));// deve retornar false.
console.log(palindrome("almostomla"));// deve retornar false.
console.log(palindrome("My age is 0, 0 si ega ym."));// deve retornar true.
console.log(palindrome("1 eye for of 1 eye.") );//deve retornar false.
console.log(palindrome("0_0 (: /-\ :) 0-0") );//deve retornar true.
console.log(palindrome("five|\_/|four") );//deve retornar false.