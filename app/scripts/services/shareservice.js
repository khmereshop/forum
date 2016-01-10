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

     factory.subcat={};
      //setter , set data to store in subcat variable
     factory.setSubcat=function(data) {
         factory.subcat=data;
     };
     //getter, get data that store in subcat variable
     factory.getSubcat=function(){
       return factory.subcat;
     };

      factory.childcat={};
      factory.setChildcat=function(data) {
          factory.childcat=data;
      };

      factory.getChildcat=function(){
          return factory.childcat;
      };


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
