'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the appApp
 */

angular.module('appApp')
.controller('HomeCtrl', ['$scope','$location','ajaxService','shareService',function ($scope, $location, ajaxService, shareService) {

    // set up an array variable
    $scope.recentForumData=[];
    var ajax=ajaxService.getAjax(RECENTFORUMURL,{},'get');
    ajax.then(
        function(data) {
            $scope.recentForumData=data;
        },
        function(err) {
            console.log(err);
        }
    );


}]);
