const port = 3003;
const express = require("express");
const app = express();


app.get("/produtos", (req, res, next) => {
    console.log("passando pelo middleware");
    next();
})

app.get("/produtos", (req, res, next) => {
    res.send({
        nome: "Teclado",
        valor: 8569.65
    })    
})

app.listen(port, () => console.log(`Started in port ${port}` ))

