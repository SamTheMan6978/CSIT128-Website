var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "LUOWD46SOLS",
    database: "project"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected!");
    var sql = "INSERT INTO services (email,serviceName) values ('lana@gmail.com','YOGA classes');"
    
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("values inserted");
     });

});