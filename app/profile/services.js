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
       }
	};
}]).
controller('ProfileController',['$scope','profileService', function($scope,profileService){

		profileService.listUsers().then(function(data){
			$scope.users=data;
			console.log($scope.users);
		})
		

}]);