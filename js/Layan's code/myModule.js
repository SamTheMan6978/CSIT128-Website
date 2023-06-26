var mysql = require('mysql');
var fs = require('fs');
var con;

// This method is used to connect to the Database
exports.connectToDB = function () {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "LUOWD46SOLS", // provide your own password.
        database: "project"
    });
    return con;
};

exports.postAuthentication = function (res, mySess, email, body) {
    if (email != -1 && email != "" && email !== undefined) {
        mySess.setMySession(body.email);
        mySess.setUseremailSession(email);
        var s = mySess.getMySession();
        if (s.email != "" && s.email !== undefined) {
            // Redirect to the Home page.
            fs.readFile("homepage.html", function (err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                return res.end();
            });
        }
    }
};

// This method is used to login the user in the web application.
exports.login = function (res) {
    fs.readFile("login.html", function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
};

// This method is used to logout the user from the web application.
exports.logout = function (res) {
    fs.readFile("login.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        if (con != undefined && con != "") {
            con.destroy();
        }
        return res.end();
    });
};

// This method navigates the user to the Home page.
exports.navigateToHome = function (res, mySess) {
    fs.readFile("homepage.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
};

exports.navigateTomemberships = function (res, mySess) {
    fs.readFile("memberships.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
};


// This method navigates the user to the services page.
exports.navigateToService = function (res, userObj, mySess) {
    fs.readFile("services.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.write("<script>");
        if (result !== undefined) {            
            res.write("document.getElementById(\"record_added\").innerHTML = 'The record has been added successfully';");                        
        }
        res.write("</script>");
        return res.end();
    });
};


// This method navigates the user to add a service page.
exports.navigateToAddService = function (res, mySess) {
    fs.readFile("add_services.html", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
};

exports.authenticateUser = function (res, body, mySess, myCallback) {
    var email = body.email;
    var password = body.password;
    con = this.connectToDB();
    con.connect(function (err) {
        if (err) throw err;
        var sql = "SELECT * from user WHERE email = '" + email + "' AND password = '" + password + "'";
        con.query(sql, function (err, result) {
            if (err) throw err;
            if (result !== undefined && result.length > 0) {
                    myCallback(res, mySess, result[0].email,body);
                
            } else {
                var message = "<script>document.getElementById(\"demo_error_message\").innerHTML = \"You have entered an incorrect username or password!\";</script> ";
                fs.readFile("login.html", function (err, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    res.end(message);
                });
            }
        });
    });
};

exports.addService = function (res, mySess, serviceName, myCallback) {
    var sql = "INSERT INTO services (email, serviceName) VALUES ('" + mySess.email  + "', '" + serviceName + "')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        myCallback(res, mySess, result);
    });
};

