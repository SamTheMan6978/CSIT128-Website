var http = require('http');
var url = require('url');
var fs = require('fs');
var myModule = require('./myModule')
var mySess = require('./mySession')
querystring = require('querystring');

 // Running the Node.js Project
http.createServer(function (req, res) {
    var body = '';
    var s;

    if (req.url == "/login") {

        // read chunks of POST data
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // when complete POST data is received
        req.on('end', () => {
            // use parse() method
            body = querystring.parse(body);

            // Authonticate user credentials.
            myModule.authenticateUser(res,body,mySess, myModule.preAuthentication);  //.then(result => console.log(result));
        });

    } else if (req.url == "/myprofile") {
        s = mySess.getMySession();
        if (s !== undefined) {
            if (s.userName != "" && s.userName !== undefined) {
                myModule.getMember(res, s, myModule.navigateToUserProfile);                 
            }
        } else {
            // Redirect to the login page.
            myModule.login(res);
        }
    } else if (req.url == "/logout") {
        s = mySess.getMySession();
        if (s !== undefined) {
            if (s.userName != "" && s.userName !== undefined) {
                mySess.deleteSession();
            }
        } else {
            // Redirect to the login page.
            myModule.login(res);
        }
        myModule.logout(res);     
    } else if (req.url == "/home") { 
            
        s = mySess.getMySession();
        console.log(s);
        if (s !== undefined) {
            if (s.userName != "" && s.userName !== undefined) {
                console.log(mySess.getMySession.username);
                myModule.navigateToHome(res);
            }
        } else {
            // Redirect to the login page.
            myModule.login(res);
        }
    } else {
        // Login page.
        myModule.login(res);
    }
}).listen(8080);