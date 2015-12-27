'use strict';

/**
 * @ngdoc service
 * @name appApp.shareService
 * @description
 * # shareService
 * Service in the appApp.
 */
angular.module('appApp')
  .service('shareService', function () {
    var factory={};
    factory.person={};
    factory.setPerson=function(data){
        factory.person=data;
    };

    factory.getPerson=function(){
      return factory.person;
    };

    factory.getfiletype=function(filetype){
      switch(filetype) {
        case "image/jpeg":
          return "jpeg";
          break;
        case "image/jpg":
          return "jpg";
          break;
        case "image/png":
          return "png";
          break;
        case "image/gif":
          return "gif";
          break;
        case "image/pdf":
          return pdf;
          break;
      }
    };

    return factory;
  });
