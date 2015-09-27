var myApp = angular.module('myApp');
myApp.controller('SignInDialogCtrl',['ngDialog', '$rootScope', '$timeout',function(ngDialog, $rootScope, $timeout){

	// view will update model with password and username
	this.model = {};

	this.submit = function(){
		console.log("username : " + this.model.username);
		console.log("password : " + this.model.password);

		Parse.User.logIn(this.model.username, this.model.password).then(function(user){
			console.log("User logged in");
			// update $rootScope.currentUser
			// Change is not automatic, so use $apply
			$rootScope.$apply(function(){
				$rootScope.currentUser = Parse.User.current();
			});
		}, function(error) {
			console.log("Error logging in");
		});
		
		ngDialog.closeAll();
	}	
}]);