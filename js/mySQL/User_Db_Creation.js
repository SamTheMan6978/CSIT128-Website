var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234" 
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql_database = "CREATE DATABASE csit128_project";
    con.query(sql_database, function (err, result) {
        if (err) throw err;
        console.log("csit128_project Database Created");
    });
});

