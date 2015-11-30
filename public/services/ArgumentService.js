var myApp = angular.module('myApp');
myApp.service('ArgumentService',function(){

	this.upvoteArgument = function(argument) {
		argument.set("upvoteCount", argument.get("upvoteCount") + 1);
		argument.addUnique("voters",Parse.User.current());
		return argument.save({}).then(
			function(a) {
				return argument;
			},
			function(error) {
				console.log(error.message);
			});
		return this;
	}

	this.currentUserHasVoted = function(argument) {
		// have to check for a defined arg to get rid of console errors because 
		// this func may be called before the arg is fully received
		// Possible workaround is to get ArgumentCtrl.init() as a resolve
  		if(argument) { 
  			var voters = argument.get("voters");
  			if(voters) {
  				for(i = 0; i < voters.length; i++) {
      			if(voters[i].id == Parse.User.current().id) {
        			return true;
      			}
    		}
    		return false;
  			}
    	}	
  	}		

	this.getArgumentById = function(id) {
		var Argument = Parse.Object.extend("Argument");
		var query = new Parse.Query(Argument);
		query.equalTo("objectId", id);
			return query.find().then(function(argument){
				return argument[0];
			});
		return this;
	}

});