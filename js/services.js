'use strict';

var mallAppServices = angular.module('mallAppServices', ['ngResource'])
.factory('WhatsHappening', ['$resource'], function ($resource) {
    return $resource('phones/:phoneId.json', {}, {
        query: { method: 'GET', params: { phoneId: 'phones' }, isArray: true }
    });
});