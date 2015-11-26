var myApp = angular.module('myApp');
myApp.controller('ArgumentCtrl',['$scope', 'ArgumentService' ,function($scope, ArgumentService){

	// initializes the Argument view based on the Argument id from debate.html's ng-repeat 
	$scope.init = function() {
		ArgumentService.getArgumentById($scope.arg.id)
			.then(function(argument){
				$scope.$apply(function() {
					$scope.argument = argument;
				});
			});
	}

	$scope.init();

}]);