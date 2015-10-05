var myApp = angular.module('myApp');
myApp.controller('SignUpDialogCtrl',['ngDialog',function(ngDialog){

	// view will update model with username, email, and password
	this.model = {};

	this.submit = function(){
		console.log("email : " + this.model.email);
		console.log("username : " + this.model.email);
		console.log("password : " + this.model.password);
		
		var user = new Parse.User();
		user.set("username", this.model.email);
		user.set("email", this.model.email);
		user.set("password", this.model.password);

		
		user.signUp().then(function(user){
			console.log("User signed up");
		}, function(error) {
			console.log(error.message);
			console.log("Error in signing up");
		});


		ngDialog.closeAll();
	}	
}]);