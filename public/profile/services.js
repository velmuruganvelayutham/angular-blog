'use strict';
angular.module('myApp.profile.services', []).factory('profileService', ['$http', function($http) {

    return {
        listUsers: function() {
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/people'
            });
        },

        addUser: function(user) {
            var addPromise = $http({
                method: 'POST',
                url: 'http://localhost:3000/people',
                data: user
            }).then(function successCallback(response) {
                console.log(JSON.stringify(response.data));
                return response.data;
            }, function errorCallback(response) {
                alert('error');
            });
            return addPromise;
        },

        deleteUser: function(id) {
            var deletePromise = $http({
                method: 'DELETE',
                url: 'http://localhost:3000/people/' + id
            }).then(function successCallback(response) {
                console.log(JSON.stringify(response.data));
                return response.data;
            }, function errorCallback(response) {
                alert('error');
            });
            return deletePromise;
        },
        updateUser: function(user) {
            var updatePromise = $http({
                method: 'PUT',
                url: 'http://localhost:3000/people/' + user.id,
                data: user
            }).then(function successCallback(response) {
                console.log(JSON.stringify(response.data));
                return response.data;
            }, function errorCallback(response) {
                alert('error');
            });
            return updatePromise;
        }

    };
}]).
controller('ProfileController', ['$scope', '$location', '$rootScope', 'profileService', '$filter', function($scope, $location, $rootScope, profileService, $filter) {
    $scope.user = {};
    $scope.listUsers = function() {
        profileService.listUsers().then(function(response) {
            $scope.users = response.data;
            console.log($scope.users);
        })
    };
    $scope.addUser = function(user) {
        console.log(user);
        var upperCaseFilter = $filter('uppercase');
        user.name = upperCaseFilter(user.name);
        if ($scope.update) {

            profileService.updateUser(user).then(function(data) {
                $scope.resetUser();
                $scope.listUsers();
                $scope.update = false;
                $scope.message = user.name + " is updated successfully !";
            })
        } else {

            profileService.addUser(user).then(function(data) {
                $scope.resetUser();
                $scope.listUsers();
                $scope.message = user.name + " is added successfully !";
            })
        }

    };
    $scope.editUser = function(user) {
        $scope.message = "";
        $scope.user = user;
        $scope.update = true;
    }

    $scope.deleteUser = function(id) {
        console.log(id);
        profileService.deleteUser(id).then(function(data) {
            $scope.message = id + " is deleted successfully !";
            $scope.listUsers();

        })
    };
    $scope.resetUser = function() {
        $scope.user = {};
        $scope.message = "";
    }

    $scope.login = function() {

        $rootScope.loggedInUser = true;
        $location.path('/dashboard');

    }
    $scope.listUsers();

    $scope.$watch('user.id', function(newVal, oldVal) {
        console.log(newVal + "- -" + oldVal);
        if (!newVal) return;
        if (newVal.length < 3) {
            $scope.message = 'minimum 3 characters are required!.';
        } else {
            $scope.message = '';
        }
    });

}]).filter('userIdGenerator', function() {

    return function(input) {
        return input.name + '@angular-blog.io';
    }
});
