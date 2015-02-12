'use strict';

/* App Config */

var API_URL = 'http://ifcaservice.com/mall/api';

var mallApp = angular.module('mallApp', [
  'ngTouch',
  'ngRoute',
  'ngMaterial',
  'ngResource',
  'mallAppAnimations',
  'mallAppControllers',
  //'mallAppFilters',
  'mallAppServices'
])
.config([
  '$routeProvider',
  '$mdThemingProvider',
  function($routeProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default').primaryPalette('red').accentPalette('orange');
    $routeProvider
    .when('/', {
      templateUrl: 'partials/splashscreen.html',
      controller: 'splashscreenCtrl'
    })
    .when('/start', {
      templateUrl: 'partials/start.html',
      controller: 'startCtrl'
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginCtrl'
    })
    .when('/directory', {
      templateUrl: 'partials/directory.html',
      controller: 'directoryCtrl'
    })
    .when('/whats-happening', {
      templateUrl: 'partials/whats-happening.html',
      controller: 'whatsHappeningCtrl'
    })
    .when('/transactions', {
      templateUrl: 'partials/transactions.html',
      controller: 'transactionsCtrl'
    })
    .when('/center-info', {
      templateUrl: 'partials/center-info.html',
      controller: 'centerInfoCtrl'
    })
    .when('/qr', {
      templateUrl: 'partials/qr.html',
      controller: 'qrCtrl'
    })
    .otherwise({
      redirectTo: '/splashscreen'
    });
  }
]);


