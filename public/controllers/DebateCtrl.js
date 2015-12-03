var myApp = angular.module('myApp');
myApp.controller('DebateCtrl',['DebateService','$scope','$timeout','currentDebate', function(DebateService, $scope,$timeout,currentDebate){
	
	// currentDebate comes from resolve that calls DebateService.getDebateById(id)
	$scope.debate = currentDebate;

	// allow current user to join the debate
	$scope.join = function() {
		DebateService.joinDebate()
			.then(function(debate){
				$scope.$apply(function(){
					$scope.debate = debate;
				})
			})
	}
}]);