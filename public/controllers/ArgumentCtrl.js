var myApp = angular.module('myApp');
myApp.controller('ArgumentCtrl',['$scope', 'ArgumentService' ,function($scope, ArgumentService){

	// upvote the argument that was clicked
	$scope.upvoteArg = function() {
		ArgumentService.upvoteArgument($scope.arg)
			.then(function(argument){
				$scope.$apply(function() {
					$scope.arg = argument;
				})
			})	
	}

	$scope.currentUserHasVoted = function() {
		if(Parse.User.current()){
			return ArgumentService.currentUserHasVoted($scope.arg);
		}
	}

	// initializes the Argument view based on the Argument id from debate.html's ng-repeat 
	// may need to have init() as a resolve because $scope.currentUserHasVoted 
	// can be called before all arguments are initialized. The console error messages
	// are 'fixed' by checking if argument is null in service call, but may be more efficient
	// to have init() run before controller is fully loaded
	$scope.init = function() {
		ArgumentService.getArgumentById($scope.arg.id)
			.then(function(argument){
				$scope.$apply(function() {
					$scope.arg = argument;
				});
			});
	}

	$scope.init();

}]);