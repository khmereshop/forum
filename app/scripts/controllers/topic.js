'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:TopicCtrl
 * @description
 * # TopicCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('TopicCtrl',['$scope','ajaxService','shareService', function ($scope, ajaxService, shareService) {

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


  }]);
