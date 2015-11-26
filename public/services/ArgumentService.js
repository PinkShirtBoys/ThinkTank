var myApp = angular.module('myApp');
myApp.service('ArgumentService',function(){

	this.getArgumentById = function(id) {
		var Argument = Parse.Object.extend("Argument");
		var query = new Parse.Query(Argument);
		query.equalTo("objectId", id);
			return query.find().then(function(argument){
				return argument;
			});
		return this;
	}

});