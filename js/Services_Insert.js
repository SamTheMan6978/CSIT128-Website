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
    var sql = "INSERT INTO user" +
     "(email, password) VALUES " +
     "('lana@gmail.com','123456');";
     con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
     });
});