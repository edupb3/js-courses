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

// class Usuario{
//     constructor(email, senha, isAdmin = false){
//         this.data = {email,  senha,  isAdmin};
//     }
//     mostraDados(){
//         console.log(this.data);
//     }
//     perfilAdm(){
//         return this.data.isAdmin;
//     }
    
// }
// class Admin extends Usuario{
//     constructor(email, senha){
//         super(email, senha, true);
//     }
// }

// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');
// console.log(User1.perfilAdm()) // false
// console.log(Adm1.perfilAdm()) // true
// Adm1.mostraDados();
// User1.mostraDados();

// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
//    ];
// const idades = usuarios.map(usuario => {
//     usuario.idade *= 2;
//     return usuario;
// });
// console.log(idades);

// const cinquentao = idades.filter(usuario =>  usuario.idade < 50);
// console.log(cinquentao);

// const rocketseat = usuarios.filter(usuario => usuario.empresa === 'Rocketseat' && usuario.idade > 18);
// console.log(rocketseat);

// const google = usuarios.find(usuario => usuario.empresa === 'Facebook');
// console.log(google);

// 3.1
const arr = [1, 2, 3, 4, 5];
var newArr = arr.map(item=> item + 10);
console.log(newArr);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const idade = usuario.idade;
console.log(idade);

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade2 = 23;
const mostraUsuario = function(nome, idade2){
    var u = [nome, idade2];
    console.log(u);
}
mostraUsuario('Diego',23);

// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
   };
   console.log(promise);
   
