var http = require('http');
var url = require('url');
var fs = require('fs');
var myModule = require('./myModule')
var mySess = require('./mySession')
querystring = require('querystring');

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
  
        // Authenticate user credentials.
        myModule.authenticateUser(res, body, mySess, myModule.postAuthentication);
      });
    } else if (req.url == "/logout") {
      s = mySess.getMySession();
      if (s !== undefined) {
        if (s.email != "" && s.email !== undefined) {
          mySess.deleteSession();
        }
      } else {
        // Redirect to the login page.
        myModule.login(res);
      }
      myModule.logout(res);
    } else if (req.url == "/index.html") {

      s = mySess.getMySession();
      console.log(s);
      if (s !== undefined) {
        if (s.email != "" && s.email !== undefined) {
                myModule.navigateToHome(res,s);
            }
      } else {
        // Redirect to the login page.
        myModule.login(res);
      }
    
    } else if (req.url === "/memberships.html") {
      s = mySess.getMySession();
      if (s !== undefined) {
        if (s.email != "" && s.email !== undefined) {
          myModule.navigateTomemberships(res, s);
        }
      }
    } else if (req.url == "/add_services.html") {
      s = mySess.getMySession();
      if (s !== undefined) {
        if (s.email != "" && s.email !== undefined) {
          myModule.navigateToAddService(res, s);
        }
      }
    } else if (req.url.indexOf("/add_service_record") >= 0) {
      s = mySess.getMySession();
      if (s !== undefined) {
        if (s.email != "" && s.email !== undefined) {
          var q = url.parse(req.url, true).query;
          myModule.addService(res, s, q.servicename, myModule.navigateToAddService);
        }
      }
    }
    else {
      // Login page.
      myModule.login(res);
    }
  }).listen(8080);
  