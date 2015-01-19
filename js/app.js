'use strict';

/* App Module */

var mallApp = angular.module('mallApp', [
    'ngRoute',
    //'mallAppAnimations',
    'mallAppControllers',
    //'mallAppFilters',
    'mallAppServices'
]);

mallApp.config(
    [
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/home', {
                    templateUrl: 'partials/home.html',
                    controller: 'homeCtrl'
                }).
                when('/start', {
                    templateUrl: 'partials/start.html',
                    controller: 'startCtrl'
                }).
                when('/login', {
                    templateUrl: 'partials/login.html',
                    controller: 'loginCtrl'
                }).
                when('/select-default', {
                    templateUrl: 'partials/select-default.html',
                    controller: 'selectDefaultCtrl'
                }).
                when('/directory', {
                    templateUrl: 'partials/directory.html',
                    controller: 'directoryCtrl'
                }).
                when('/whats-happening', {
                    templateUrl: 'partials/whats-happening.html',
                    controller: 'whatsHappeningCtrl'
                }).
                when('/transactions', {
                    templateUrl: 'partials/transactions.html',
                    controller: 'transactionsCtrl'
                }).
                when('/center-info', {
                    templateUrl: 'partials/center-info.html',
                    controller: 'centerInfoCtrl'
                }).
                when('/qr', {
                    templateUrl: 'partials/qr.html',
                    controller: 'qrCtrl'
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }
    ]
);