const session = require('express-session');
var mySession;

exports.setMySession = function (email) {
    mySession = session;
    mySession.email = email;
    console.log("Session Created.");
};

exports.setUseremailSession = function (email) {
    mySession = session;
    mySession.email = email;
    console.log("Employee ID Session Created.");
};

exports.getMySession = function(){
    return mySession;
};

exports.deleteSession = function () {
    mySession = "";
    console.log("Session Deleted.");
};
