var myApp = angular.module('myApp');
myApp.controller('CreateDebateDialogCtrl',['ngDialog','DebateService''$location',function(ngDialog,DebateService,$location){

	// this model holds fields needed to create a Debate
	this.model = {
		title : "",
		description: "",
		opponent : "",
		side : "" // side can be "Against" or "For"
	}

	this.createDebate = function() {
		DebateService.createDebate(this.model);
		ngDialog.closeAll();
		// go to this Debate's view. 
		$location.url('/Debate/' + title);
	}

}]);