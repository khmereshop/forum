'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:SubcategoryCtrl
 * @description
 * # SubcategoryCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('SubcategoryCtrl', ['$scope','shareService',function ($scope,shareService) {
    $scope.subcat=shareService.getSubcat();

  }]);
