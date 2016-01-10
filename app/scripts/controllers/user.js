'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('UserCtrl',['$scope','ajaxService','shareService','$stateParams', function ($scope, ajaxService, shareService, $stateParams) {

    $scope.info={};
    var param={};
    param.id=$stateParams.id;
    var ajax=ajaxService.getAjax(PROFILEURL,param,'get');
    ajax.then(
      function(data) {
        $scope.info=data;
      },

        function(err){
          console.log(err);
        }

    );


  }]);
