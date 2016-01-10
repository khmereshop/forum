'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MemberCtrl
 * @description
 * # MemberCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MemberCtrl', ['$scope','ajaxService','shareService','$location',function ($scope,ajaxService,shareService, $location) {

      $scope.members=[];
      var ajax=ajaxService.getAjax(MEMBERURL,{},'get');
      ajax.then(
          function(data){
              $scope.members=data;
          },
          function(err){
              console.log(err);
          }

      );

      $scope.goto=function(data) {

          $location.path('/user/'+data.id);
      };


  }]);
