var myApp = angular.module('myApp');
myApp.controller('HomeCtrl',[ function(){

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

}]);