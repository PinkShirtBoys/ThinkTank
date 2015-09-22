//modules
var express = require('express');

var app = express();
module.exports = app;

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 5000;
app.listen(port, function(){
	console.log("http://127.0.0.1:" + port);
});
