var Parse = require('parse/node');
var config = require('./config');
Parse.initialize(config.ParseApplicationId, config.ParseJavascriptKey, config.ParseMasterKey);
Parse.Cloud.useMasterKey();

process.argv.forEach(function(val, index, array) {
	// https://nodejs.org/docs/latest/api/process.html#process_process_argv
	// actual command line args will be from index 2 onwards 
	if(index > 1) {
		clearParse(val);
	}
});

// clears all Parse objects associated with given val.
// val is the Parse Class
function clearParse(val) {

	console.log("will clear " + val);
	if(val == "All") {
		clearAll();
	}
	// delete only objects of the given class
	else {
		var ParseClass = Parse.Object.extend(val);
		var query = new Parse.Query(ParseClass);
		// find each obj and delete it
		query.find().then(function(objs){
			objs.forEach(function(obj){
				obj.destroy({
					success: function(obj){

					},
					error: function(obj, error){
						console.log(obj);
						console.log(error.message);
					}
				})
			});
			console.log("finished clearing all " + val);
		})
	}
	
function clearAll() {
	var array = ["User", "_Session", "Debate", "Argument"];
	array.forEach(function(a) {
		clearParse(a);
	})
}

}