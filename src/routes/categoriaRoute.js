const {Router} = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');
const route = Router();

const categoriaController = new CategoriaController();
route.get('/categoria', (req,res)=> categoriaController.pegaTodos(req,res));
route.get('/categoria/:id', (req,res)=> categoriaController.pegaUmRegistro(req,res));
route.post('/categoria', (req,res)=> categoriaController.criaRegistro(req,res));
route.put('/categoria/:id', (req,res)=> categoriaController.atualizaRegistro(req,res));
route.delete('/categoria/:id', (req,res)=>categoriaController.apagaRegistro(req,res));

module.exports = route;