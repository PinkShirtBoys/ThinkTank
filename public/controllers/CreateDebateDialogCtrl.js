var myApp = angular.module('myApp');
myApp.controller('CreateDebateDialogCtrl',['ngDialog',function(ngDialog){

	// this model holds the essentials to create a debate
	this.model = {
		title : "",
		description: "",
		opponent : "",
		side : "" // side can be Against or For
	}

	// needs a call to Parse
	this.createDebate = function() {
		console.log(this.model);

		ngDialog.closeAll();
	}

}]);