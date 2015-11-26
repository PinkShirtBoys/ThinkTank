var myApp = angular.module('myApp');
myApp.controller('DebateCtrl',['DebateService', '$routeParams','$scope','$timeout','$location', function(DebateService, $routeParams, $scope,$timeout,$location){
	
	// $scope.debate is updated from init()
	$scope.maxArg = 3;

	// allow current user to join the debate
	$scope.join = function() {
		DebateService.joinDebate()
			.then(function(debate){
				$scope.$apply(function(){
					$scope.debate = debate;
				})
			})
	}

	// initializes the Debate view based on the Debate associated with the current url
	// Currently, urls have one param for id
	// Get the id param and get debate with that id
	$scope.init = function() {
		var debateId = $routeParams.param;
		DebateService.getDebateById(debateId)
			.then(function(debate){
				$scope.$apply(function() {
					$scope.debate = debate;
				});
			});
	}

	$scope.init();
}]);