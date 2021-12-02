const sequence = {
    _id: 1,
    get id() {
        return this._id++;
    }
}

const produtos = {}

function getProdutos(){
    return Object.values(produtos)
}

function salvarProduto(produto){
    if (!produto.id) produto.id = sequence.id;
    produtos[produto.id] = produto;
    return produto;
}

function getProduto(id){    
    return produtos[id] || {};
}

function deleteProduto(id){
    let tmp = produtos[id]
    delete produtos[id];
    return tmp;
}

module.exports = {produtos, getProduto, getProdutos, salvarProduto, deleteProduto}