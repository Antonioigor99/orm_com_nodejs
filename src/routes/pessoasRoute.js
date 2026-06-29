const {Router} = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js')
const pessoaController = new PessoaController();
const matriculaController = new MatriculaController()
const route = Router();
route.get('/pessoas', (req,res)=> pessoaController.pegaTodos(req,res));
route.get('/pessoas/:id', (req,res) => pessoaController.pegaUmRegistro(req,res));
route.post('/pessoas', (req,res) => pessoaController.criaRegistro(req,res));
route.put('/pessoas/:id', (req,res) => pessoaController.atualizaRegistro(req,res));
route.delete('/pessoas/:id', (req,res) => pessoaController.apagaRegistro(req,res));


//matriculas
route.post('/pessoas/:estudanteId/matricula', (req,res) => matriculaController.criaRegistro(req,res));
module.exports = route;