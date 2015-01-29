'use strict';

var mallAppServices = angular.module('mallAppServices', ['ngResource'])
.factory('WhatsHappening', ['$resource',
  function ($resource) {
    return $resource(API_URL + '/odata/BlogPosts?$filter=substringof(\'MALL_EVENT\',Tags) eq true&&orderby=Title');
  }
]);
