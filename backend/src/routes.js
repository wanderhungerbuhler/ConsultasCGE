const express = require('express');

const execSQLQuery = require('./database/create-table');

const routes = express.Router();
routes.get('/clientes/:id?', (req, res) =>{
  let filter = '';
  if(req.params.id) filter = ' WHERE cpf=' + parseInt(req.params.id);
  execSQLQuery('SELECT * FROM usuarios' + filter, res);
});

module.exports = routes;
