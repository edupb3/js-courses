/**Procurar e destruir
Você receberá um array inicial (o primeiro argumento na função destroyer), seguido por um ou mais argumentos. Remova todos os elementos da matriz inicial que são do mesmo valor que esses argumentos.

Observação: você tem que usar os arguments do objeto. */

function destroyer(arr, ...args) {  
    arr.forEach(() => {
      args.forEach(el =>{
        const indexFindElement = arr.indexOf(el)
        if (indexFindElement !== -1){
          arr.splice(indexFindElement, 1)
        }
      })
    })
    console.log(arr)      
    return arr;
  }
  
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3)
  destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)
  destroyer([2, 3, 2, 3], 2, 3)
  destroyer(["tree", "hamburger", 53], "tree", 53)