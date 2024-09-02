let proximoId = 1;

const model = (body, id=proximoId++) => {
    if(body.nome != undefined &&
        body.nome != "" &&
        body.endereço != "" &&
        body.endereco != undefined
    ){
        return {
            id: id,
            nome: body.nome,
            endereco: body.endereco,
        }
    }
}

module.exports = model;