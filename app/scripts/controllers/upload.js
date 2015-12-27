'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:UploadCtrl
 * @description
 * # UploadCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('UploadCtrl', ['$scope','FileUploader','shareService',function ($scope,FileUploader,shareService) {

      $scope.person=shareService.getPerson();
      $scope.progressflag=false;

      $scope.uploader = new FileUploader({
          url: UPLOADPHOTO,
          formData: [$scope.person],
          alias: "photo",
          removeAfterUpload: true,
          queueLimit: 10,
          withCredentials: true,
          filters: [{
              name: 'photofilter',
              // A user-defined filter
              fn: function (item) {
                  if (item.type == "image/jpg" || item.type == "image/jpeg" || item.type == "image/png" || item.type == "image/gif" || item.type == "image/pdf") {
                      return true;
                  } else {
                      return false;
                  }
              }
          }]
      });

      $scope.uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
          $scope.error="Please check your photo file again or It may be reach the maximum 10 photos. It may be the wrong image file. You can upload only 10 pictures at one time.";
          $scope.myclass="alert alert-danger";
      };
      $scope.uploader.onAfterAddingFile = function(fileItem) {
          $scope.error="";
          //console.info('onAfterAddingFile', fileItem);
      };
      $scope.uploader.onAfterAddingAll = function(addedFileItems) {
          //console.info('onAfterAddingAll', addedFileItems);
      };

      $scope.uploader.onBeforeUploadItem = function(item) {
          var data=$scope.person;
          data.filetype=shareService.getfiletype(item.file.type);
          item.formData[0]=data;
          $scope.error="";
          $scope.progressflag=true;

      };

      $scope.uploader.onProgressItem = function(fileItem, progress) {
          $scope.progressflag=true;
      };

      $scope.uploader.onProgressAll = function(progress) {
          //console.info('onProgressAll', progress);
      };

      $scope.uploader.onSuccessItem = function(fileItem, response, status, headers) {
          //console.info('onSuccessItem', fileItem, response, status, headers);
      };

      $scope.uploader.onErrorItem = function(fileItem, response, status, headers) {
          //console.info('onErrorItem', fileItem, response, status, headers);

      };


      $scope.uploader.onCancelItem = function(fileItem, response, status, headers) {

          //console.info('onCancelItem', fileItem, response, status, headers);
      };

      $scope.uploader.onCompleteItem = function(fileItem, response, status, headers) {
          $scope.error=response.msg;

      };

      $scope.uploader.onCompleteAll = function() {
          $scope.progressflag=false;
          $scope.myclass="alert alert-info";
          $scope.message="";
      };


  }]);
