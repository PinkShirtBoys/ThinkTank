var myApp = angular.module('myApp');
myApp.controller('HomeCtrl',[ 'ngDialog',function(ngDialog){
	// Debates are hardcoded right now
	// TODO : get Debates from Parse
	this.debates = [
		{
			title : "A",
			url : "www.thinkportal.com/debates/a"
		},

		{
			title : "B",
			url : "www.thinkportal.com/debates/b"
		}
	];
	
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
			template: '../views/SignUpDialog.html',
			className: 'ngdialog-theme-plain',
			controllerAs: 'SignUpDialogCtrl'
		})
	}

}]);