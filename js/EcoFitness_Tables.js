var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "csit128_project"
  });

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    var sql = "show tables";
    con.query(sql, function(err,result){
        if(err) throw err;
        console.log(result);
    });
});