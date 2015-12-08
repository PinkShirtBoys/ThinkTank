var myApp = angular.module('myApp');
myApp.controller('DebateCtrl',['DebateService','$scope','$location','currentDebate', function(DebateService, $scope,$location,currentDebate){
	
	$scope.init = function() {
		// currentDebate comes from resolve that calls DebateService.getDebateById(id)
		if(currentDebate){
			$scope.debate = currentDebate;	
		}
		else {
			console.log("debate does not exist");
			$location.url('/');
		}
	}

	// allow current user to join the debate
	$scope.join = function() {
		DebateService.joinDebate()
			.then(function(debate){
				$scope.$apply(function(){
					$scope.debate = debate;
				})
			})
	}

	$scope.init();

}]);