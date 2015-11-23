var myApp = angular.module('myApp');
myApp.controller('DebateCtrl',['DebateService', '$routeParams','$scope', function(DebateService, $routeParams, $scope){
	
	// TODO : A more concrete Debate Model
	// Debate model will need to have awareness of round
	// Current debate model holds against arg and for arg
	// this is a temporary placeholder for values that have not been initialized yet
	// $scope.debate = {
	// 	turn : "",
	// 	title : "",
	// 	againstArg : {
	// 		title : 'Argument Title [AGAINST]',
	// 		discussion : 'Argument discussion [AGAINST]'
	// 	},
	// 	forArg : {
	// 		title : 'Argument Title [FOR]',
	// 		discussion : 'Argument discussion [FOR]'
	// 	}
	// }

	// Let the Current User join this debate
	this.join = function() {
		console.log("will join the debate ....");
	}

	// initializes the Debate view based on the Debate associated with the current url
	// Currently, urls have one param for Title
	// Assuming that all titles are unique, find the Debate associated with the title
	// and display that Debate
	this.init = function() {
		var debateId = $routeParams.param;
		DebateService.getDebateById(debateId)
			.then(function(debate){
				$scope.$apply(function() {
					$scope.debate = debate;
				});
			});
	}

	this.init();
}]);