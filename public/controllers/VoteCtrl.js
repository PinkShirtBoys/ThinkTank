var myApp = angular.module('myApp');
myApp.controller('VoteCtrl',['$scope','DebateService',function($scope, DebateService){

	// $scope.debate contains current debate
	this.vote = function() {
		DebateService.voteOnSide(this.side);
	}

}]);