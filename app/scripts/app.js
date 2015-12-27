/**
 * Created by samsan on 12/27/15.
 */

var appApp = angular.module('appApp', ['ui.router','ngMaterial','ngResource','angularFileUpload','ngCookies','ngSanitize']);

appApp .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url:'/home',
            views: {
                viewHome: {
                    templateUrl: 'views/home.html',
                    controller: 'HomeCtrl'
                }
            }
        })
        .state('register', {
            url:'/register',
            views: {
                "viewHome": {
                    templateUrl: 'views/register.html',
                    controller: 'RegisterCtrl'
                },

                "viewAccount@register": {
                    templateUrl: 'views/account.html',
                    controller: 'AccountCtrl'
                },

                "viewProfile@register": {
                    templateUrl: 'views/profile.html',
                    controller: 'ProfileCtrl'
                },
                "viewPhoto@register": {
                    templateUrl: 'views/upload.html',
                    controller: 'UploadCtrl'
                }

            }
        })
        .state('register.info', {
            url:'/info',
            views: {
                viewA: {
                    templateUrl: 'views/info.html',
                    controller: 'info'
                }
            }
        })
        .state('register.upload', {
            url:'/upload',
            views: {
                viewA: {
                    templateUrl: 'views/upload.html',
                    controller: 'upload'
                }
            }
        })
    }
]);