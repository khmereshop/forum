'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:forum
 * @description
 * # forum
 */
angular.module('appApp')
  .directive('forum', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the forum directive');
      }
    };
  });
