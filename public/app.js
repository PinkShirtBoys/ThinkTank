var myApp = angular.module('myApp',['ngRoute','ngMaterial','ngDialog'])
.run(function($rootScope) {
  $rootScope.currentUser = Parse.User.current();
});

Parse.initialize("sb60iaVk7DTr9g3JZ0zfpqLIlK8lM2s6WVzbPaED", "lWOfrM6Son29gBIZ84kaPwvNmXJY1klvMc4oFc3J");

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