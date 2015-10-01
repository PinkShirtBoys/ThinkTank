var myApp = angular.module('myApp');
myApp.controller('ToolbarCtrl',['$mdSidenav','$location', '$mdBottomSheet', '$q',
  function($mdSidenav, $location, $mdBottomSheet,$q){

  // displays the sidenav
	this.toggleList = function() {
    	var pending = $mdBottomSheet.hide() || $q.when(true);
    	pending.then(function(){
			$mdSidenav('right').toggle();
    });
  };
  	
  this.goToHomeView = function() {
  	$location.path('/');
  };

}]);