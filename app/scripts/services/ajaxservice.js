'use strict';

/**
 * @ngdoc service
 * @name appApp.ajaxService
 * @description
 * # ajaxService
 * Service in the appApp.
 */
angular.module('appApp')
  .service('ajaxService', ['$http','$q',function ($http,$q) {

    var pService = {};
    pService.getAjax = function (myurl, param, methodtype) {
      var defer = $q.defer();
      $http({method: methodtype, url: myurl, params: param}).
      success(function (data, status, headers, config) {
        defer.resolve(data);
      }).
      error(function (data, status, headers, config) {
        defer.reject(status);
      });
      return defer.promise;
    };

    pService.postImage = function(myurl,param){
      var defer = $q.defer();
      $http.contentType="canvas/upload";
      //$http.transformRequest=angular.identity;
      $http({method:"post", url: myurl, params: param}).
      success(function (data, status, headers, config) {
        defer.resolve(data);
      }).
      error(function (data, status, headers, config) {
        defer.reject(status);
      });
      return defer.promise;
    };

    return pService;

  }]);
