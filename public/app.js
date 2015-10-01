var myApp = angular.module('myApp',['ngRoute','ngMaterial','ngDialog'])
.run(function($rootScope,$mdMedia) {

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

myApp.config(function($mdIconProvider, $mdThemingProvider){
  // configure md-icons -> md-svg-icon = "name" instead of path
  $mdIconProvider
    .icon("profile", "./assets/svg/profile.svg", 128)
    .icon("menu" , "./assets/svg/menu.svg", 24)
    .icon("logo", "./assets/svg/logo.svg",128);

  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('red');
});

