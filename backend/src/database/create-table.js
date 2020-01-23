const sql = require('mssql');
const connStr = "Server=10.9.57.132;Database=CGECNPJ;User Id=CGECNPJ_urd1;Password=Cgeqxs143;";

function execSQLQuery(sqlQry, res){

  sql.connect(connStr)
   .then(conn => global.conn = conn)
   .catch(err => console.log(err));

  global.conn.request()
  .query(sqlQry)
  .then(result => res.json(result.recordset))
  .catch(err => res.json(err));
}

module.exports = execSQLQuery;

