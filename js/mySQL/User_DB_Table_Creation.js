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
    "CREATE TABLE user_info (user_id INT PRIMARY KEY, " +
    "user_fname VARCHAR(50)," +
    "user_lname VARCHAR(50)," +
    "user_phone VARCHAR(20)," +
    "membership ENUM('Solo', 'Duo', 'Family')," +
    "user_password VARCHAR(32)," +
    "user_email VARCHAR(50))";

  con.query(sql_table, function (err, result) {
    if (err) throw err;
    console.log("User Table created");
  });
});
