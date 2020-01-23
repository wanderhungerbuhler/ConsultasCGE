const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

app.listen(3333);


