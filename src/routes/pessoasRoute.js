const {Router} = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const route = Router();
const pessoaController = new PessoaController;
route.get('/pessoas', (req,res)=> pessoaController.pegaTodos(req,res));

module.exports = route;