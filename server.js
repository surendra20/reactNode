const express = require('express');
const sql = require('mssql');

const app = express();
const port = process.env.PORT || 5002;
app.get('/getDetails', (req, res) => {
var config = {
                  server: "Server name", 
                  user: "username",
                  password: "password",
                  database: "databasename"
           };
           sql.close()
sql.connect(config).then(() => {
  return sql.query`select * from tblReportUtilization GROUP BY [rptcatg],[rptname],[rpturl],[count]`
}).then(result => {
  
    res.send({ tableData: result.recordset });
    
}).catch(err => {
  // ... error checks
  console.log('err', err);
})
 
sql.on('error', err => {
  console.log('err', err);
})

})
app.listen(port, () => console.log(`Listening on port ${port}`));
