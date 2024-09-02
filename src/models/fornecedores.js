let proximoId = 1;

const model = (body, id=proximoId++) => {
    if(body.nome != undefined &&
       body.nome != "" 
    ){
        return {
            id: id,
            nome: body.nome,
        }
    }
}

module.exports = model;