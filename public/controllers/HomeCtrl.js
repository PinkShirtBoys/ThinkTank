var myApp = angular.module('myApp');
myApp.controller('HomeCtrl',[ 'ngDialog',function(ngDialog){
	// Debates are hardcoded right now
	// TODO : get Debates from Parse
	this.debates = [
		{
			title : "1",
			url : "#/Debate/1"
		},

		{
			title : "2",
			url : "#/Debate/2"
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