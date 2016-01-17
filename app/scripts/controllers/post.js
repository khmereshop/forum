'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('PostCtrl', ['$scope','ajaxService','shareService',function ($scope,ajaxService, shareService) {
    $scope.topics=[];
    $scope.form={'title':'','description':'','topic':''};

    // http ajax request
    var ajax=ajaxService.getAjax(TOPICURL,{},'get');
    // callback function
    ajax.then(
        // the response data from web server
        function(data) {
          $scope.topics=shareService.addChecked(data);

          console.log('*** show topics ****');
          console.log($scope.topics);

        },
        // the error response from web server
        function(err){
          console.log(err);
        }
    );

    $scope.$watch('form.topic',function(){
        console.log($scope.form.topic);
    });

  }]);
