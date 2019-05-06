//alert('Funcionou');

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var gits = JSON.parse(localStorage.getItem('git')) || [];

function renderGits(){
    listElement.innerHTML = '';
    for (git of gits){
        var gitElement = document.createElement('li');
        var gitText = document.createTextNode(git);
        var linkElement = document.createElement('a');
        
        var pos = gits.indexOf(git);
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'removerGit('+pos+')');

        gitElement.appendChild(gitText);
        
        listElement.appendChild(gitElement);
        saveToStorage();
    }
}

function renderLoading(loading) {
    listElement.innerHTML = "";

    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');

    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
  }

function renderError(loading) {
    listElement.innerHTML = "";

    var textElement = document.createTextNode('Erro!');
    var errorElement = document.createElement('li');

    errorElement.style.color = "#F00";

    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);
}

renderGits();

function addGit(){
    var textInput = inputElement.value;      
    
    renderLoading();

    axios.get('https://api.github.com/users/'+textInput+'/repos')
    .then(function(response){            
        for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index];
            gits.push(element.name);            
        }        
        inputElement.value = '';
        renderGits();
    })
    .catch(function(error){
        renderError();
    });

    
}

buttonElement.onclick = addGit;

function removerGit(pos){
    gits.splice(pos,1);
    renderGits();
}

function saveToStorage(){
    localStorage.setItem("git", JSON.stringify(gits));
}