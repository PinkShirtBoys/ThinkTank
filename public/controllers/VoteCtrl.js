var myApp = angular.module('myApp');
myApp.controller('VoteCtrl',['DebateService',function(DebateService){

	this.vote = function() {
		DebateService.voteOnSide(this.side);
		this.side = "";
	}

	this.currentUserHasVoted = function() {
		if(Parse.User.current()){
			return DebateService.currentUserHasVoted();
		}
	}

}]);