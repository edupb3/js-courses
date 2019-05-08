import axios from 'axios';
const buscaUsuario = async usuario => {
    const response = await axios.get(`https://api.github.com/users/${usuario}`)    
    console.log(response);
   }
   buscaUsuario('diego3g');

//

// async function getUserFromGithub(user) {
//     try {
//         const response = await axios.get(`https://api.github.com/users/${user}`);    
//         console.log(response);   
//     } catch (error) {
//         console.warn('Usuário não existe');       
//     }
   
// }
// // getUserFromGithub('diego3g');
// // getUserFromGithub('diego3g124123')

// class Github {
//     static async getRepositories(repo) {
//         try {
//             const response = await axios.get(`https://api.github.com/repos/${repo}`)
//             console.log(response);   
//         } catch (error) {
//             console.warn('Repositório não existe');     
//         }
      
//     }
//    }
//    Github.getRepositories('rocketseat/rocketseat.com.br');
//    Github.getRepositories('rocketseat/dslkvmskv');

// // Funão delay aciona o .then após 1s
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
// async function umPorSegundo() {
//     await delay();   
//     console.log('1s');
//     await delay();
//     console.log('2s');
//     await delay();
//     console.log('3s');    
// }

// const umCadaSegundo = async () => {
//     await delay();   
//     console.log('4s');
//     await delay();
//     console.log('5s');
//     await delay();
//     console.log('6s');
// }
// umPorSegundo();
// umCadaSegundo();


//  import ClasseUsuario from './functions';
//  import {idade as idadeUsuario} from './functions';

// ClasseUsuario.info();
// console.log(idadeUsuario);



// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('OK') }, 2000);
// });

// async function executaPromise(){    
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());    
// }

// executaPromise();

// minhaPromise().then(response => {
//     console.log(response);
// });

// class List{
//     constructor(){
//         this.data = [];
//     }
//     add(data){
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// class TodoList extends List{  
//     constructor(){
//         super();

//         this.usuario = 'Eduardo';
//     }  

//     mostraUsuario(){
//         console.log(this.usuario);
//     }
// }

// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function(){
//     MinhaLista.add('Novo todo');
// }

// MinhaLista.mostraUsuario();

// const arr = [1,3,4,5,6,7,9,16];
// const newArr = arr.map((item, index) => {
//     return item+4+index;
// })
// console.log(newArr);

// const sum = arr.reduce(function(total, next1){
//     return total + next1;
// })
// console.log(sum);

// const filter = arr.filter(item => item % 2 === 0)
// console.log('Filter = '+filter);

// const teste = () => ({nome: 'Eduardo'});
// console.log(teste());

// const soma = (a=3, b=2) => a+b;
// console.log(soma(1,1));
// console.log(soma());

// const find = arr.find(function(item){
//     return item === 1;
// })
// console.log(find);

// const usuario = {
//     nome: 'Eduardo',
//     idade: 36,
//     endereco: {
//         cidade: 'Belém',
//         estado: 'PA'
//     }
// };
// const {nome, idade, endereco: {estado}} = usuario;
// console.log(nome);
// console.log(idade);
// console.log(estado);

// function mostraNome({nome, idade, endereco: {estado}} = usuario){
//     console.log(nome);
// }
// mostraNome(usuario);

// const {nome, ...resto} = usuario;
// console.log(resto);

// function soma (... params){
//     return params.reduce((total, next) => total + next);
// }

// console.log(soma(1,3,2,4));

// const nome = "Diego";
// const idade = 23;
// const mostraUsuario = (nome = 'Edu', idade = 18) => ({nome, idade});
// var x = mostraUsuario(nome, idade);
// var y = mostraUsuario(nome);
// console.log(x);
// console.log(y);

// 3.2
// Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };
// const mostraIdade = (usuario) => usuario.idade;
// var x = mostraIdade(usuario);
// console.log(x);

// 3.1
// const arr = [1, 2, 3, 4, 5];
// arr.map(item => item + 10);

// const empresa = {
//     nome: 'Rocketseat',
//     endereco: {
//         cidade: 'Rio do Sul',
//         estado: 'SC',
//     }
// }
// var {nome, endereco:{cidade, estado}} = empresa;
// console.log(nome);
// console.log(cidade);
// console.log(estado);

// function mostraInfo(usuario) {
//     var {nome, idade} = usuario;
//     return `${nome} tem ${idade} anos.`;
//     //return `${usuario.nome} tem ${usuario.idade} anos.`;
// }
// console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

// const arr = [1, 2, 3, 4, 5, 6];
// function myFun([x, ...y]) {
//     console.log("x: ", x);     
//     console.log("y: ", y); 
//   }
//   myFun(arr);
  
// function soma(...nums) {
//     return nums.reduce((a, b) => a + b);
// }
  
// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3

// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     endereco: {
//       cidade: 'Rio do Sul',
//       uf: 'SC',
//       pais: 'Brasil',
//     }
//   }

//   var usuario2 = {...usuario, nome: 'Gabriel'};
//   var usuario3 = {...usuario, endereco:{cidade: 'Lontras'}};
//   console.log(usuario2);
//   console.log(usuario3);

// const usuario = 'Diego';
// const idade = 23;
// console.log(`O usuário ${usuario}  possui ${idade} anos`);

// const nome = "Diego";
// const idade2= 23;

// const usuario2 = {
//   nome,
//   idade2,
//   cidade: "Rio do Sul"
// };
// console.log(usuario2);
