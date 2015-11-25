var myApp = angular.module('myApp');
myApp.controller('PostArgumentCtrl',['DebateService','$location','$timeout', function(DebateService,$location, $timeout){

	this.postArgument = function() {
		console.log("will post an argument");
		// post argument and then go to Debate view to simulate a refresh
		DebateService.postArgument(this.argument)
			.then(function(argument){
				$timeout(function() {
					$location.url('/Debate/' + DebateService.getCurrentDebate().id);
				}) 
		})
	}

}]);