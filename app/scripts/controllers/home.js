'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the appApp
 */

appApp.controller('HomeCtrl', ['$scope','$location',function ($scope, $location) {

    $scope.goto=function(index) {
      switch(index) {
          case 0:
                $location.path('/home');
          break;
          case 1:
                $location.path('/home/topic');
          break;
          case 2:
              $location.path('/home/members');
          break;

      }
    };


}]);
