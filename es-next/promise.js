// com promise
const http = require("http");

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    
    return new Promise((resolve, reject) => {        
        let result = "";
        http.get(url, res => {
            res.on("data", data => {
                result += data;
            })                 
            res.on("end", () => {
                try {
                    resolve(JSON.parse(result));    
                } catch (error) {
                    reject(error);
                }
                
            })       
        })       
    })
} 
//Promise.all recebe um array de promises
Promise.all( [getTurma("A"), getTurma("B"), getTurma("C")] )
    .then(turmas => [].concat(...turmas))
    .then(turma => turma.map(aluno => aluno.nome) )
    .then(nome => console.log(nome) )
