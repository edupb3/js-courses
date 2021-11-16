/**
 * Pesquisar perfil
Temos um array de objetos representando pessoas diferentes nas nossas listas de contatos.

Uma função lookUpProfile, que recebe name e uma propriedade (prop) como argumentos, foi pré-escrita para você.

A função deve verificar se name é o firstName (primeiro nome) de um contato e se a propriedade passada (prop) é uma propriedade daquele contato.

Se ambos forem verdadeiros, então retorne o "valor" daquela propriedade.

Se name não corresponder a nenhum dos contatos, então retorne a string No such contact.

Se prop não corresponder a nenhuma propriedade válida de um contato encontrado para coincidir com name então retorne a string No such property.


 */

// Configuração
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Altere apenas o código abaixo desta linha
    let ret = "";
    let existName ;
    let existProp ;
    let existsContact = contacts.filter(el => el.firstName === name )
    if (existsContact[0]){
         existName = (existsContact[0].firstName === name);
         existProp = existsContact[0].hasOwnProperty(prop);

        existName && existProp ? ret = existsContact[0][prop] : ret;
        !existName ? ret = "No such contact" : ret;
        !existProp ? ret = "No such property" : ret;
    }else{
        ret = "No such contact";
    }
    

    console.log(existName, existProp, ret);
    
  
    // Altere apenas o código acima desta linha
  }
  
  //lookUpProfile("Akira", "likes");
  lookUpProfile("Bob", "number")

  /**
   * lookUpProfile("Kristian", "lastName") deve retornar a string Vos

lookUpProfile("Sherlock", "likes") deve retornar ["Intriguing Cases", "Violin"]

lookUpProfile("Harry", "likes") deve retornar um array

lookUpProfile("Bob", "number") deve retornar a string No such contact

lookUpProfile("Bob", "potato") deve retornar a string No such contact

lookUpProfile("Akira", "address") deve retornar a string No such property
   */