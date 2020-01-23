const mysql = require('mysql');

function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'basecge'
  });

  connection.query(sqlQry, function(error, results, fields){
      if(error)
        res.json(error);
      else
        res.json(results);
      connection.end();
  });
}

module.exports = execSQLQuery;

