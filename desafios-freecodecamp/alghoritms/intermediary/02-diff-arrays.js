/**Diferenciar dois arrays
Compare dois arrays e retorne um novo array com qualquer item encontrado em apenas um dos dois arrays passados, mas não ambos. Em outras palavras, retorne a diferença simétrica de dois arrays.

Observação: você pode retornar o array com seus elementos em qualquer ordem. */

function findDifferences(arr1, arr2){
    const newArr = [];
    arr1.forEach(el => {
      arr2.indexOf(el) === -1 ? newArr.push(el) : true
    })
    return newArr;
  }
  
  function diffArray(arr1, arr2) {
    const newArr = [];
    let result = newArr
      .concat(... findDifferences(arr1, arr2))
      .concat(... findDifferences(arr2, arr1))
    return result;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);