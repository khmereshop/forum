'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:SubcategoryCtrl
 * @description
 * # SubcategoryCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('SubcategoryCtrl', ['$scope','shareService','$location','$stateParams',function ($scope,shareService,$location,$stateParams) {

      $scope.id=$stateParams.id;
      $scope.subcat=shareService.getSubcat();

      $scope.goto=function(index) {
          var data=$scope.subcat.subcategory[index];
          shareService.setChildcat(data);
          $location.path('/forum/'+data.id);
      };

  }]);
