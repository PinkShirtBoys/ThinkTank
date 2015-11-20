var myApp = angular.module('myApp');
myApp.controller('HomeCtrl',[ 'DebateService', '$scope',function(DebateService, $scope){

	// get all debates from Parse
	// currently using $scope.debates
	// TODO : find a way to use this.debates
	DebateService.getDebates()
		.then(function(results){
			$scope.$apply(function() {
				$scope.debates = results;
			})
		}
	);

}]);