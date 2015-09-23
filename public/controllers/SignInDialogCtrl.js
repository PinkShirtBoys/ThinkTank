var myApp = angular.module('myApp');
myApp.controller('SignInDialogCtrl',['ngDialog',function(ngDialog){

	// view will update model with password and username
	this.model = {};

	// TODO : submit the usernamd and password to Parse
	this.submit = function(){
		console.log("username : " + this.model.username);
		console.log("password : " + this.model.password);
		ngDialog.closeAll();
	}	
}]);