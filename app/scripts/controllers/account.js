'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('AccountCtrl', ['$scope',function ($scope) {
        $scope.genders=['Mr','Ms','Mrs'];
        $scope.user={'email':'','gender':'','password':''};
  }]);
