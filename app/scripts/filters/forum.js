'use strict';

/**
 * @ngdoc filter
 * @name appApp.filter:forum
 * @function
 * @description
 * # forum
 * Filter in the appApp.
 */
angular.module('appApp')
  .filter('forum', function () {
    return function (input) {
      return 'forum filter: ' + input;
    };
  });
