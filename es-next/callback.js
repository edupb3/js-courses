//sem promise
const http = require("http");

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    http.get(url, res => {
        let result = "";

        res.on("data", dados => {
            result += dados;
        })

        res.on("end", ()=>{
            return callback(JSON.parse(result));
        })
    })
}
let nomes = [];
getTurma("A", turma => {
    nomes = nomes.concat(turma.map(aluno => `Turma A: ${aluno.nome}`));    
    getTurma("B", turma => {
        nomes = nomes.concat(turma.map(aluno => `Turma B: ${aluno.nome}`));
        getTurma("C", turma => {
            nomes = nomes.concat(turma.map(aluno => `Turma C: ${aluno.nome}`))            
        })
    }) 
})
//getTurma("A", a => console.log(`Turma A: ${a.nome}`))
//getTurma("B", a => console.log(`Turma B: ${a.nome}`))