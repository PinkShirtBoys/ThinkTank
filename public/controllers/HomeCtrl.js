var myApp = angular.module('myApp');
myApp.controller('HomeCtrl',[function(){
	console.log("In Home Ctrl");
	// Debates are hardcoded right now
	// TODO : get Debates from Parse
	this.debates = [{
		title : "A",
		url : "www.thinkportal.com/debates/a"
	},
	{
		title : "B",
		url : "www.thinkportal.com/debates/b"
	}
	];
}]);