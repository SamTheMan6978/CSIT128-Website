var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "LUOWD46SOLS",
    database: "project" 
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql_table = "CREATE TABLE services (email VARCHAR(100), serviceName VARCHAR(100))";
    con.query(sql_table, function (err, result) {
        if (err) throw err;
        console.log("Services Table created");
    });
});