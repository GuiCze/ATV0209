const express = require("express")
const produtos_router = require("./router/produtos.js");
const fornecedores_router = require("./router/fornecedores.js");
const mercados_router = require("./router/mercados.js");
const porta = 3000;
const app = express();

app.use(express.json());
app.use("/mercado", mercados_router);
app.use("/produto", produtos_router)
app.use("/fornecedor", fornecedores_router)




app.listen(porta, () => {
    console.log(`Server running in ${porta} port.`);
})