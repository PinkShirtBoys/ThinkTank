var myApp = angular.module('myApp',['ngRoute','ngDialog']);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/',{
      templateUrl:'views/home.html',
      controller:'HomeCtrl',
      controllerAs:''
    }).
    otherwise({
      redirectTo:'/'
    });
}]);