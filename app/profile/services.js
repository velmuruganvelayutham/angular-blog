'use strict';
angular.module('myApp.profile.services',[]).factory('profileService',function(){
	return{          
       users:[{name:"velmurugan"},{name:"manick"}],
       listUsers:function(){
       	this.users;
       }
	};
}).
controller('ProfileController',['$scope','profileService', function($scope,profileService){

		$scope.users=[{name:"velmurugan"},{name:"manick"}];

}]);