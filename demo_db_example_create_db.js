// This Node.js file is used to create the project database.
// @author Dr. Haitham Yaish
// @date 11 June 2023
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "LUOWD46SOLS" // provide your own password.
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // Create database csit128_example.
    var sql_database = "CREATE DATABASE project";
    con.query(sql_database, function (err, result) {
        if (err) throw err;
        console.log("project Database Created");
    });
});

