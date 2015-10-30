'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.profile',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard',{templateUrl:'dashboard.html'})
  .otherwise({redirectTo: '/dashboard'});
}]).controller('todoController',['$scope',function($scope){

    $scope.todoList=[];
    $scope.addToDo=function(value){
      $scope.todoList.push({text:value});
      $scope.todo="";
    }
    $scope.removeToDo=function(value){
      if($scope.todoList.indexOf(value)!==-1){
        $scope.todoList.splice($scope.todoList.indexOf(value),1);
      }
    }

}]);
