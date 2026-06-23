const {Router} = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const route = Router();
const pessoaController = new PessoaController;
route.get('/pessoas', (req,res)=> pessoaController.pegaTodos(req,res));
route.get('/pessoas/:id', (req,res) => pessoaController.pegaUmRegistro(req,res));
route.post('/pessoas', (req,res) => pessoaController.criaRegistro(req,res));
route.put('/pessoas/:id', (req,res) => pessoaController.atualizaRegistro(req,res));
route.delete('/pessoas/:id', (req,res) => pessoaController.deletaRegistro(req,res));

module.exports = route;