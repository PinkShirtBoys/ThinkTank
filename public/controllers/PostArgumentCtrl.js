var myApp = angular.module('myApp');
myApp.controller('PostArgumentCtrl',['DebateService', function(DebateService){

	// Use DebateService
	this.postArgument = function() {
		console.log("will post an argument");
	}

}]);