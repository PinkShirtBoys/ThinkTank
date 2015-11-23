var Parse = require('parse/node');
var config = require('./config');
Parse.initialize(config.ParseApplicationId, config.ParseJavascriptKey, config.ParseMasterKey);
Parse.Cloud.useMasterKey();

process.argv.forEach(function(val, index, array) {
	// https://nodejs.org/docs/latest/api/process.html#process_process_argv
	// actual command line args will be from index 2 onwards 
	if(index > 1) {
		createUser(val);
	}
});

// if val = 'a'
// create user with username 'a@a.com' with password 'a'
function createUser (val) {
	var username = val+"@"+val+".com";
	var password = val;

	var user = new Parse.User();
	user.set("password", password);
	user.set("username", username);

	user.signUp(null, {
  	success: function(user) {
  		console.log("created user : " + user.get("username") + " password : " + password); 
  	},
  	error: function(user, error) {
    	console.log(error.message);
  	}
});
}

