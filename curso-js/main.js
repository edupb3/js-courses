// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/users/edupb3');
// xhr.send(null);

// xhr.onreadystatechange = function(){
//     if (xhr.readyState === 4){
//         console.log(JSON.parse(xhr.responseText));
//     }
// }
/*-------------------------------------------------- */
// var minhaPromisse = function(){
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/edupb3');
//         xhr.send(null);

//         xhr.onreadystatechange = function(){
//             if(xhr.readyState === 4){
//                 if (xhr.status === 200){
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//                 else{
//                     reject('Erro na requisição');
//                 }
//             }
//         }
//     });
// }

// minhaPromisse()
//     .then(function(response){
//         console.log(response);
//     })
//     .catch(function(error){
//         console.warn(error);
//     });

/* utilização do axios*/ 

    // axios.get('https://api.github.com/users/edupb3')
    // .then(function(response){
    //     console.log(response);
    // })
    // .catch(function(error){
    //     console.warn(error);
    // });
    
    

    function checaIdade(idade){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                if (idade >= 18){
                    resolve();
                }
                else{
                    reject();
                }
            }, 5000);
        });
    }

    checaIdade(16)
        .then(function(){
            console.log('Maior que 18');
        })
        .catch(function(){
            console.log('Menor que 18');
        });

    