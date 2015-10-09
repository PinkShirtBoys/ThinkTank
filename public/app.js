var myApp = angular.module('myApp',['ngRoute','ngMaterial','ngDialog'])
.run(function($rootScope,$mdMedia) {

  $rootScope.currentUser = Parse.User.current();

});

// ParseCredentials found in config.js
// ParseCredentials will only be used in app.js
// If ParseCredentials must be used in mulitple places, put ParseCredentials in a myApp.constant()
Parse.initialize(ParseCredentials.applicationId, ParseCredentials.javascriptKey);

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

