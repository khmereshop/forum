'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:TopicCtrl
 * @description
 * # TopicCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('TopicCtrl',['$scope','ajaxService','shareService','$location', function ($scope, ajaxService, shareService,$location) {

      $scope.topics=[];
      var ajax=ajaxService.getAjax(TOPICURL,{},'get');
      ajax.then(
        function(data) {
            console.log(data);
            $scope.topics=data;
        },
        function(err) {
            console.log(err);
        }
      );

      $scope.goto=function(index) {
          var subcat=$scope.topics[index];
          shareService.setSubcat(subcat);
          $location.path('/home/subcategory');
      };


  }]);
