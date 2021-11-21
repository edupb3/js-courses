

function recursive (param){
    if (param === 10){
        console.log(param)
    }
    else{
        param++;
        recursive(param);
        console.log(4%2 ? 'ímpar': 'par');
        console.log('aqui');
    }
}

recursive(2);

var arr_original = [["n",0],["p",1],["s",2],["t",3]];
//Atribuição por referência
var arr_copia_referencia = arr_original;
 
//Atribuição por valor
var array_copia_valor = arr_original.slice();

let section = arr_original.slice().map(i => i.slice())

//Remove o primeiro elemento do array original
//arr_original.pop();
arr_original[1][1] = [88];


 
//Verificando o valor do array original, verificamos que o mesmo foi modificado
console.log(arr_original); //[1,2,3];
 
//O array cópia por referência também foi afetada
console.log(arr_copia_referencia); //[1,2,3];
 
//Mas o array que recebeu a atribuição por cópia não foi afetado
console.log(array_copia_valor);
 
console.log( section);

//Agora, alterando o array por referência
arr_copia_referencia.pop();
 
//Verificando o valor do array original, verificamos que o mesmo foi modificado
console.log(arr_original); //[2,3];
 
//O array cópia por referência foi afetado, como esperado
console.log(arr_copia_referencia); //[2,3];
 
//Mas o array que recebeu a atribuição por cópia não foi afetado em nenhuma das vezes
console.log(array_copia_valor);