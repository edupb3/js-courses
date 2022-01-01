/*Hifenizar
Converta uma string transformado os espaços em hifens. Casos espinais são todas-as-palavras-minúsculas-unidas-por-traços.*/

function spinalCase(str) {
    const regExp = /\s+|_+/g;
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    console.log(str.replace(regExp, "-").toLowerCase());
    return str.replace(regExp, "-").toLowerCase();
  }
  
  spinalCase("This Is Spinal Tap") //deve retornar a string this-is-spinal-tap.

  spinalCase("thisIsSpinalTap") //deve retornar a string this-is-spinal-tap.
  
  spinalCase("The_Andy_Griffith_Show") // deve retornar a string the-andy-griffith-show.
  
  spinalCase("Teletubbies say Eh-oh") //deve retornar a string teletubbies-say-eh-oh.
  
  spinalCase("AllThe-small Things") //deve retornar a string all-the-small-things.