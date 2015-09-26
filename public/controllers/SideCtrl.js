var myApp = angular.module('myApp');
myApp.controller('SideCtrl',['ngDialog', function(ngDialog){

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

}]);