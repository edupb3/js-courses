/**Localizar por valor
Faça uma função que olha através de um array de objetos (primeiro argumento) e retorna um array de todos os objetos que têm pares de nome e valor correspondentes (segundo argumento). Cada par de nome e valor do objeto fonte tem que estar presente no objeto da coleção se ele for ser incluído no array retornado.

Por exemplo, se o primeiro argumento é [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], e o segundo argumento é { last: "Capulet" }, em seguida, você deve retornar o terceiro objeto do array (o primeiro argumento), porque contém o nome e o seu valor, que foi passado como segundo argumento. */

function whatIsInAName(collection, source) {  
  const result = [];

  let key = Object.keys(source);  
  for(let el of collection){
    let insert = true;
    for (let k of key){
      insert = (el[k] ? el[k] == source[k] : false) && insert;  
    }
    if (insert)
      result.push(el);    
  }  
  
  return result;    
}



whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) //deve retornar [{ first: "Tybalt", last: "Capulet" }].

whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) //deve retornar [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) //deve retornar [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) //deve retornar [{ "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) //deve retornar [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) //deve retornar []
  
