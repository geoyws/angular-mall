'use strict';

/* App Module */

var mallApp = angular.module('mallApp', [
    'mallAppAnimations',
    'mallAppControllers',
    'mallAppFilters',
    'mallAppServices'
]);

mallApp.config(
    [
        '$routerProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/home', {
                    templateUrl: 'partials/home.html',
                    controller: 'homeCtrl'
                })
                when('/customer-service', {
                    templateUrl: 'partials/customer-service.html',
                    controller: 'customerServiceCtrl'
                }).
                when('/directory', {
                    templateUrl: 'partials/directory.html',
                    controller: 'directoryCtrl'
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }
    ]
);