var mysql = require("mysql");
var fs = require("fs");
var con;

// DataBase connection
exports.connectToDB = function () {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "csit128_example",
  });
  return con;
};

// Session Creator and User Authorisation

exports.preAuthentication = function (res, mySess, memID, body) {
  if (memID != -1 && memID != "" && memID !== undefined) {
    mySess.setMySession(body.username);
    mySess.setUserIdSession(user_id);
    s = mySess.getMySession();
    if (s.userName != "" && s.userName !== undefined) {
      // Redirect to the Home page.
      fs.readFile("index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  }
};

// User Website Login

exports.login = function (res) {
  // display error message if there is any.
  fs.readFile("login.html", function (err, data) {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
};

// User Website Logout

exports.logout = function (res) {
  fs.readFile("login.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    con.destroy();
    return res.end();
  });
};

// User Homepage Navigation
exports.navigateToHome = function (res) {
  fs.readFile("index.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
};

// User Credential Verification
exports.authenticateUser = function (res, body, mySess, myCallback) {
  var memUsername = body.username;
  var memPassword = body.password;
  // Connect to the database.
  con = this.connectToDB();
  con.connect(function (err) {
    if (err) throw err;
    // Get employee record.
    var sql =
      "SELECT * from user_info WHERE user_fname = '" +
      memUsername +
      "' AND user_password = '" +
      mempPassword +
      "'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result !== undefined && result.length > 0) {
        myCallback(res, mySess, result[0].user_id, body);
      } else {
        // show error message on the login page.
        var message =
          '<script>document.getElementById("demo_error_message").innerHTML = "You have entered an incorrect username or password!";</script> ';
        fs.readFile("login.html", function (err, data) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end(message);
        });
      }
    });
  });
};

// Method for getting Member Record
exports.getMember = function (res, mySess, myCallback) {
  var sql = "SELECT * from user_info WHERE user_id = " + mySess.user_id;
  con.query(sql, function (err, result) {
    if (err) throw err;
    if (result !== undefined && result.length > 0) {
      myCallback(res, result); // result - employee object
    }
  });
};


// User moves to userProfile Page

exports.navigateToUserProfile = function (res, memObj) {
    fs.readFile("userprofile.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.write("<script>");
        res.write("document.getElementById(\"user_id_display\").innerHTML = '" + memObj[0].user_id + "';" + "\n");        
        res.write("document.getElementById(\"user_fname_display\").innerHTML = '" + memObj[0].user_fname + "';" + "\n");        
        res.write("document.getElementById(\"user_lname_display\").innerHTML = '" + memObj[0].user_lname + "';" + "\n");        
        res.write("document.getElementById(\"user_email_display\").innerHTML = '" + memObj[0].user_email + "';" + "\n");        
        res.write("document.getElementById(\"emp_salary_display\").innerHTML = '" + memObj[0].user_phone + "';" + "\n");        
        res.write("document.getElementById(\"membership_display\").innerHTML = '" + memObj[0].membership + "';" + "\n");          
        res.write("</script>");
        return res.end();
    });
};