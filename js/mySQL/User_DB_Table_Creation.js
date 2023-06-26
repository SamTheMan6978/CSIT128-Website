var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",   
    database: "csit128_project" 
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    
    var sql_table =
    'CREATE TABLE IF NOT EXISTS user_info (' +
    'user_id INT AUTO_INCREMENT UNIQUE, ' +
    'user_fname VARCHAR(50), ' +
    'user_lname VARCHAR(50), ' +
    'user_phone VARCHAR(50), ' +
    'membership ENUM("Solo", "Duo", "Family"), ' +
    'user_password VARCHAR(32), ' +
    'user_email VARCHAR(50) PRIMARY KEY' +
    ')';
    con.query(sql_table, function (err, result) {
        if (err) throw err;
        console.log("User Table created");
    });
});