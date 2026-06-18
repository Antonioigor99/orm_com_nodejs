/** Camada intermediaria para regras de negocio */
const dataSource = require('../models');

class Services {
    constructor(nomeModel){
        this.model = nomeModel;
    }
    // serve para pegar qualquer modelo
    async pegaTodosOsRegistros(){
        return dataSource[this.model].findAll();
    }
}
module.exports = Services;