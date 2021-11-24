/**Recuperar a mulher chinesa com o menor salário */

const axios = require("axios");
let pessoaMenorSalario;

const URL = "http://files.cod3r.com.br/curso-js/funcionarios.json";

axios.get(URL).then(response => {
    const lista = response.data;
    const arr = Object.values(lista);
    let result = arr.filter(listaMulheresChinesas).reduce(listaMenorSalario);    
    console.log(result);
})

const listaMulheresChinesas = el => el.genero === "F" && el.pais === "China";
const listaMenorSalario = (acc, el) => {
    pessoaMenorSalario = acc;
    if(el.salario < pessoaMenorSalario.salario){
        pessoaMenorSalario = el;
    }
    return pessoaMenorSalario;
}

