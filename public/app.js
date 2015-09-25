var myApp = angular.module('myApp',['ngRoute','ngMaterial','ngDialog']);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/',{
      templateUrl:'views/home.html',
      controller:'HomeCtrl',
      controllerAs:''
    }).
    //TODO : 
    when('/Debate/:param',{
      templateUrl:'views/debate.html',
      controller:'DebateCtrl',
      controllerAs:''
    }).
    otherwise({
      redirectTo:'/'
    });
}]);