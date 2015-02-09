'use strict';

var mallAppServices = angular.module('mallAppServices', ['ngResource', 'ngRoute'])
.factory('Standard', ['$window',
  function($window) {
    return {
      back: function () { $window.history.back(); },
      showNavbar: function (bool) {
	// if true, show navbar and if false, hide it
	if (bool == true) {
	  // show it
	  $window.showNavbar = true; 
	} else
	if (bool == false) {
	  // hide it
	  $window.showNavbar = false;
	}
      },
      breadcrumbs: function (string) {
	document.getElementById('breadcrumbs').innerHTML = string;
      }
    };
  }
])
.factory('WhatsHappening', ['$resource',
  function($resource) {
    return $resource(API_URL + '/odata/BlogPosts?$filter=substringof(\'MALL_EVENT\',Tags) eq true&&orderby=Title');
  }
]);
