/**Recuperar a mulher chinesa com o menor salário */

const axios = require("axios");
let pessoaMenorSalario;

const URL = "http://files.cod3r.com.br/curso-js/funcionarios.json";

axios.get(URL).then(response => {
    const lista = response.data;
    const arrFuncionarios = Object.values(lista);
    
    let result = arrFuncionarios
        .filter(mulherChinesa)
        .reduce(listaMenorSalario);    
    console.log(result);
})

const mulherChinesa = ({genero, pais}) => genero === "F" && pais === "China"

const listaMenorSalario = (salarioAnterior, funcionaria) => {
    pessoaMenorSalario = salarioAnterior;
    if(funcionaria.salario < pessoaMenorSalario.salario){
        pessoaMenorSalario = funcionaria;
    }
    return pessoaMenorSalario;
}

