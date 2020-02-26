var config = require( "./config.json" );
var fs = require('fs');
var app = require('express')();
var cronRouter = require('./route/htjy_route');
var options = {
    key: fs.readFileSync("freightapp_key.pem"),
    cert: fs.readFileSync("freightapp_cert.pem")
};

var serverPort = config.cron_tracking_order;


var server = require("https").createServer(options, app);
app.use("/cron", cronRouter);
server.listen(serverPort);



