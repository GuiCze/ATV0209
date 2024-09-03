let proximoId = 1;
const fornecedores = require("../controllers/fornecedores.js");
const mercados = require("../controllers/mercados.js")

const model = (body, id=proximoId++) => {
    if(body.nome != undefined &&
       body.nome != "" &&
       body.quantidade > 0 &&
       !isNaN(Number(body.quantidade)) &&
       mercados.show(body.mercado_id) &&
       fornecedores.show(body.fornecedor_id)
    ){
        return {
            id: id,
            nome: body.nome,
            quantidade: body.quantidade,
            mercado_id: body.mercado_id,
            fornecedor_id: body.fornecedor_id,
            }
        }
    }

module.exports = model;