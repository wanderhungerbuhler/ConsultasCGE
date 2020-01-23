const express = require('express');
const routes = express.Router();

const execSQLQuery = require('./database/create-table');

routes.get('/clientes/:id?', (req, res) =>{
  let filter = '';
  if(req.params.id) filter = ' WHERE cnpj=' + parseInt(req.params.id);
  execSQLQuery(
  "SELECT cnpj, razao_social, nome_fantasia, situacao_cadastral, cnae_fiscal, descricao_tipo_logradouro, logradouro, numero, complemento, bairro, cep, municipio, uf, ddd_telefone_1, ddd_telefone_2, correio_eletronico, capital_social_empresa, opcao_pelo_mei, data_inicio_atividade FROM [CGECNPJ].[dbo].[cnpj_dados_cadastrais_pj]" + filter, res);
})

module.exports = routes;
