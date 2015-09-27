var myApp = angular.module('myApp');
myApp.controller('SideCtrl',['ngDialog','$rootScope','$timeout', function(ngDialog, $rootScope, $timeout){

	// opens up a dialog for the user to enter his username + password
	// further logic is held in SignInDialogCtrl.
	this.signIn = function() {
		ngDialog.open({ 
			template: '../views/signInDialog.html',
		    className: 'ngdialog-theme-plain',
		    controllerAs : 'SignInDialogCtrl'
		});
	}

	// opens up a dialog for the user to enter his information to register
	// further logic is held in SignUpDialogCtrl.
	this.signUp = function() {
		ngDialog.open({
			template: '../views/signUpDialog.html',
			className: 'ngdialog-theme-plain',
			controllerAs: 'SignUpDialogCtrl'
		})
	}

	// signs current user out
	this.signOut = function() {
		Parse.User.logOut().then(
			function(){
				console.log("User signed out");
				// using $timeout because an $apply is already in progress
				// most likely something with the Parse api callback
				$timeout(function() {
					$rootScope.$apply(function(){
						$rootScope.currentUser = Parse.User.current();
					});
				},0);
			},
			function(error){
				console.log("error logging out");
			}
		);
	}

}]);