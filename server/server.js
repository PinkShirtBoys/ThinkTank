var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var config = require('./config'); 

var app = express();
module.exports = app;

// create ParseServer object to mount onto the express app
var api = new ParseServer({
	databaseURI :  config.parse_databaseURI,
	appId : config.parse_appId ,
	masterKey : config.parse_masterKey,
	javascriptKey : config.parse_javascriptKey
});

console.log(__dirname);
app.use(express.static(__dirname + '../../public'));
// Serve the Parse API at /parse URL prefix
app.use('/parse', api);

var port = process.env.PORT || 5000;
app.listen(port, function(){
	console.log("http://127.0.0.1:" + port);
});