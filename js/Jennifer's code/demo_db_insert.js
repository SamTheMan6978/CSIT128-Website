var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "csit128_project"
  });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    var serviceData = [
        { name: 'YOGA', description: 'Practice yoga postures, breathing exercises, and meditation for physical and mental well-being.' },
        { name: 'CARDIOVASCULAR FITNESS', description: 'Improve cardiovascular health and endurance through aerobic exercises.' },
        { name: 'STRENGTH TRAINING', description: 'Build strength and muscle through resistance exercises, weightlifting, and bodyweight training.' },
        { name: 'HIIT', description: 'High-Intensity Interval Training involves intense bursts of exercise followed by short recovery periods for efficient calorie burning and cardiovascular conditioning.' }
    ];

    
    var values = serviceData.map(service => [service.name, service.description]);

    con.query(sql, [values], function(err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " records inserted");
    });
});