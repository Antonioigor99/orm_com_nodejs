/** Camada intermediaria para regras de negocio */
const dataSource = require('../models');

class Services {
    constructor(nomeModel){
        this.model = nomeModel;
    }
    // serve para pegar todos os registros de qualquer modelo, sem precisar especificar o nome do modelo,
    //pois é passado como parâmetro no construtor da classe Services.
    async pegaTodosOsRegistros(){
        return await dataSource[this.model].findAll();
    }
    //serve para pegar um registro específico de qualquer modelo, recebendo o id do registro como parâmetro.
    async pegaUmRegistro(id){
        return await dataSource[this.model].findByPk(id);
    }
    //serve para criar qualquer modelo, recebendo os dados do corpo da requisição
    async criaRegistro(dados){
        return await dataSource[this.model].create(dados);
    }

    async atualizarRegistro(dados, id){
        return await dataSource[this.model].update(dados, {where: {id: id}});
    }
    async deletaRegistro(id){
        return await dataSource[this.model].destroy({where: {id: id}});
    }
}
module.exports = Services;