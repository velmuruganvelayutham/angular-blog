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
         var addPromise = $http({
			  method: 'POST',
			  url: 'http://localhost:3000/people',
			  data:user
			}).then(function successCallback(response) {
				 console.log(JSON.stringify(response.data));
			     return response.data;
			  }, function errorCallback(response) {
			     alert('error');
			  });
			return addPromise;
       }
       ,

       deleteUser:function(id){
         var deletePromise = $http({
			  method: 'DELETE',
			  url: 'http://localhost:3000/people/'+ id
			}).then(function successCallback(response) {
				 console.log(JSON.stringify(response.data));
			     return response.data;
			  }, function errorCallback(response) {
			     alert('error');
			  });
			return deletePromise;
       }

   };
}]).
controller('ProfileController',['$scope','profileService', function($scope,profileService){
		$scope.user={};
		$scope.listUsers = function(){
			profileService.listUsers().then(function(data){
			$scope.users=data;
			console.log($scope.users);
		})
	};
		$scope.addUser = function(user){
			console.log(user);
			profileService.addUser(user).then(function(data){
				$scope.resetUser();
				$scope.listUsers();
		})
		};

		$scope.deleteUser = function(id){
			console.log(id);
			profileService.deleteUser(id).then(function(data){
				$scope.listUsers();

		})
		};
		$scope.resetUser =function(){
			$scope.user={};
		}
		
		$scope.listUsers();

}]);