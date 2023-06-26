// The purpose of this method and this Nod.js file is to run the Node.js project

var http = require('http');
var url = require('url');
var fs = require('fs');
var mysql = require('mysql');
var querystring = require('querystring');
var myModule = require('./myModule');
var mySess = require('./mySession');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "csit128_project"
  });

http.createServer(function (req, res) {
    var body = '';
    var s;

    if (req.url == "/login") {
        req.on('data', function (chunk) {
            body += chunk.toString();
        });

        req.on('end', function () {
            body = querystring.parse(body);
            myModule.authenticateUser(res, body, mySess, myModule.postAuthentication, con);
        });

    } else if (req.url == "/myprofile") {
        s = mySess.getMySession();
        if (s !== undefined) {
            if (s.userName != "" && s.userName !== undefined) {
                myModule.getEmployee(res, s, myModule.navigateToUserProfile, con);
            }
        } else {
            myModule.login(res);
        }
    } else if (req.url == "/logout") {
        s = mySess.getMySession();
        if (s !== undefined) {
            if (s.userName != "" && s.userName !== undefined) {
                mySess.deleteSession();
            }
        } else {
            myModule.login(res);
        }
        myModule.logout(res);
    } else if (req.url == "/home") {
        s = mySess.getMySession();
        if (s !== undefined) {
            if (s.userName != "" && s.userName !== undefined) {
                myModule.navigateToHome(res, s);
            }
        } else {
            myModule.login(res);
        }
    } else if (req.url == "/title" || req.url == "/title?") {
        s = mySess.getMySession();
        if (s !== undefined) {
            if (s.userName != "" && s.userName !== undefined) {
                myModule.getTitles(res, s, myModule.navigateToTitle, con);
            }
        }
    } else if (req.url == "/add_title?") {
        s = mySess.getMySession();
        if (s !== undefined) {
            if (s.userName != "" && s.userName !== undefined) {
                myModule.navigateToAddTitle(res, s);
            }
        }
    } else if (req.url.indexOf("/add_title_record") >= 0) {
        s = mySess.getMySession();
        if (s !== undefined) {
            if (s.userName != "" && s.userName !== undefined) {
                var q = url.parse(req.url, true).query;
                myModule.addTitle(res, s, q.titleDesc, q.titleStartDate, myModule.navigateToAddTitle, con);
            }
        }
    } else {
        myModule.login(res);
    }
}).listen(8443);
