

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