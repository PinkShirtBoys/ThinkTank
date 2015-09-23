var myApp = angular.module('myApp');
myApp.controller('SignUpDialogCtrl',['ngDialog',function(ngDialog){

	// view will update model with username, email, and password
	this.model = {};

	// TODO : submit all user info to Parse
	this.submit = function(){
		console.log("email : " + this.model.email);
		console.log("username : " + this.model.username);
		console.log("password : " + this.model.password);
		ngDialog.closeAll();
	}	
}]);