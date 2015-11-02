'use strict';
angular.module('myApp.profile.services',[]).factory('profileService',['$http',function($http){

	return{          
     listUsers:function(){
      var promise = $http({
			  method: 'GET',
			  url: 'http://localhost:3000/people'
			}).then(function successCallback(response) {
				console.log(JSON.stringify(response.data));
			     return response.data;
			  }, function errorCallback(response) {
			     alert('error');
			  });
			return promise;
       },

       addUser:function(user){
         var promise = $http({
			  method: 'POST',
			  url: 'http://localhost:3000/people',
			  data:user
			}).then(function successCallback(response) {
				 console.log(JSON.stringify(response.data));
			     return response.data;
			  }, function errorCallback(response) {
			     alert('error');
			  });
			return promise;
       }

   };
}]).
controller('ProfileController',['$scope','profileService', function($scope,profileService){

		$scope.listUsers = function(){
			profileService.listUsers().then(function(data){
			$scope.users=data;
			console.log($scope.users);
		})
	};
		$scope.addUser = function(user){
			console.log(user);
			profileService.addUser(user).then(function(data){
			
		})
		};
		
		$scope.listUsers();

}]);