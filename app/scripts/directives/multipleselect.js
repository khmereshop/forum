'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:multipleSelect
 * @description
 * # multipleSelect
 */
angular.module('appApp')
  .directive('multipleSelect', function () {
    return {
      templateUrl: 'views/multipleSelect.html',
      restrict: 'AE',
      scope: {arraydata:'=',returndata:'='},
      link: function postLink(scope, element, attrs) {

        scope.selectItem=function(data, index, index2) {

            console.log(index);
            console.log(index2);

            for(var i=0; i < scope.arraydata.length; i++) {
                for(var j=0; j < scope.arraydata[i].subcategory.length; j++) {
                    scope.arraydata[i].subcategory[j].checked=false;
                }
            }

            scope.arraydata[index].subcategory[index2].checked=true;
            scope.returndata=data;
        };

      }
    };
  });
