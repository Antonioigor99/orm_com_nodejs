/**
 * aqui é o arquivo de inicialização e configuração do sevidor web e a aplicação express
 */
const express = require("express");
const routes = require('./routes');

const app = express();
routes(app);

module.exports = app;
