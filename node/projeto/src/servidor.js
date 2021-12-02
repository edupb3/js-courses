const port = 3003;
const express = require("express");
const app = express();
const db = require("./database");
const bodyParser = require("body-parser");

app.use(express.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

app.get("/produtos", (req, res, next) => {
    console.log("passando pelo middleware");
    next();
})

app.get("/produtos", (req, res, next) => {
    const p = db.getProdutos();
    res.send(p);    
})

app.get("/produtos/:id", (req, res, next) => {
    const p = db.getProduto(req.params.id);
    res.send(p);
})

app.post("/produtos", (req, res, next) => {
    const p = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(p)
})

app.put("/produtos/:id", (req, res, next) => {
    const p = db.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(p)
})

app.delete("/produtos/:id", (req, res, next) => {
    const p = db.deleteProduto(req.params.id);
    res.send(p)
})

app.listen(port, () => console.log(`Started in port ${port}` ))

