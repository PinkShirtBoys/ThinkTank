var myApp = angular.module('myApp');
myApp.controller('CreateDebateDialogCtrl',['ngDialog','DebateService','$location','$timeout',function(ngDialog,DebateService,$location, $timeout){

	// this model holds fields needed to create a Debate
	this.model = {
		title : "",
		description: "",
		opponent : "",
		side : "" // side can be "Against" or "For"
	}

	this.createDebate = function() {
		DebateService.createDebate(this.model)
			.then(function(debate){
				ngDialog.closeAll();
				$timeout(function() {
					$location.url('/Debate/' + debate.id);
				}) 
			});
	}

}]);