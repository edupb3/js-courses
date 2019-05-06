//alert('Funcionou');

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'removerTodo('+pos+')');

        var linkText = document.createTextNode(' Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
 
        listElement.appendChild(todoElement);
        saveToStorage();
    }
}

renderTodos();

function addTodo(){
    var textInput = inputElement.value;
    todos.push(textInput);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;

function removerTodo(pos){
    todos.splice(pos,1);
    renderTodos();
}

function saveToStorage(){
    localStorage.setItem("todos", JSON.stringify(todos));
}