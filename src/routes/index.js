/**
 * Aqui temos o index das rotas que  vão passar as requisições
 */
const express = require('express');
const pessoas = require('./pessoasRoute.js');
const categorias = require('./categoriaRoute.js');
const cursos = require('./cursosRoute.js');

module.exports = app =>{
    app.use(express.json(), pessoas, categorias, cursos );
}