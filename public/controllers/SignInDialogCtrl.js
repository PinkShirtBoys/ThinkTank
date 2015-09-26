var myApp = angular.module('myApp');
myApp.controller('SignInDialogCtrl',['ngDialog',function(ngDialog){

	// view will update model with password and username
	this.model = {};

	// TODO : submit the usernamd and password to Parse
	this.submit = function(){
		console.log("username : " + this.model.username);
		console.log("password : " + this.model.password);

		Parse.User.logIn(this.model.username, this.model.password).then(function(user){
			console.log("User logged in");
			

		}, function(error) {
			console.log("Error logging in");

		});

		ngDialog.closeAll();
	}	
}]);