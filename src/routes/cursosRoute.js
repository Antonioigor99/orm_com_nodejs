const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');
const cursoController = new CursoController();
const route = Router();

route.get('/curso', (req,res)=> cursoController.pegaTodos(req,res));
route.get('/curso/:id', (req,res)=> cursoController.pegaUmRegistro(req,res));
route.post('/curso', (req,res) => cursoController.criaRegistro(req,res));
route.put('/curso/:id', (req,res)=> cursoController.atualizaRegistro(req,res));
route.delete('/curso/:id', (req,res)=> cursoController.apagaRegistro(req,res));

module.exports = route;