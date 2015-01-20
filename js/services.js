'use strict';

var mallAppServices = angular.module('mallAppServices', ['ngResource'])
.factory('WhatsHappening', ['$resource'], function ($resource) {
    return $resource('', {}, {
        query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
    });
});