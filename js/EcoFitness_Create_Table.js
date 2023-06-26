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
    var sql = "CREATE TABLE services (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, description TEXT);";
    con.query(sql, function(err,result){
        if(err) throw err;
        console.log("Table Created");
    });
});