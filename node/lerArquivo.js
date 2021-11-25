const fs = require("fs");

const caminho = __dirname + "\\arquivo.json";

//sincrono
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

//assincrono
const conteudoAssync = fs.readFile(caminho, "utf-8", (err, arquivo) => {
    const config = JSON.parse(arquivo)
    console.log(config.db.host);
})

//direto
const direto = require("./arquivo.json");
console.log(direto);

//ler diretório
fs.readdir(__dirname, (err, arq) => {
    console.log(arq);
})