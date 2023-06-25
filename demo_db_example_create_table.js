// This Node.js file is used to create the project database table.
// @author Dr. Haitham Yaish
// @date 11 June 2023

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
    var sql_table = "CREATE TABLE user (email VARCHAR(100), password VARCHAR(100))";
    con.query(sql_table, function (err, result) {
        if (err) throw err;
        console.log("user Table created");
    });
});