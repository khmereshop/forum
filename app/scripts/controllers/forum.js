'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:ForumCtrl
 * @description
 * # ForumCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ForumCtrl', ['$scope','shareService','ajaxService','$stateParams',function ($scope,shareService,ajaxService,$stateParams) {

      // the subcat variable get data from shareService
      $scope.subcat=shareService.getSubcat();
      // the childcat variable get data from shareService
      $scope.childcat=shareService.getChildcat();
      // initialize a variable
      $scope.forums=[]; // array variable

      // create an ajax call
      var param={};
      param.id=$stateParams.id;
      var ajax=ajaxService.getAjax(FORUMURL,param,'get');
      ajax.then(
          function(data) {
              $scope.forums=data;
          },
          function(err){
              console.log(err);
          }
      );

  }]);
