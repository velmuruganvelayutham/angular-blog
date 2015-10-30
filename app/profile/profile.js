'use strict';

angular.module('myApp.profile',['ngRoute']).
config(['$routeProvider',function($routeProvider){

$routeProvider.when('/login',{
	templateUrl:'profile/login.html'
  }).
when('/signup',{
	templateUrl:'profile/signup.html'
}).
when('/users',{
	templateUrl:'profile/users.html',
	controller:'ProfileController'
});
}]);

