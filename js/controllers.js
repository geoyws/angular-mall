'use strict';

/* Controllers */

var mallAppControllers = angular.module('mallAppControllers', ['ngMaterial'])
.controller('splashscreenCtrl', ['$scope', '$location', '$timeout',
  function ($scope, $location, $timeout) {
    $scope.splashRedirect = $timeout(function () {
      //alert(JSON.stringify(localStorage.getItem('userId')));
      //alert(JSON.stringify(window.localStorage));
      // testing for localStorage functionality, if there's none, we alert a warning
      if (window.localStorage) {
	//alert(2);
	if (localStorage.getItem('userId')) {
	  //alert(1);
	  $location.path('/home');
	} else {
	  $location.path('/start');
	}
      } else {
	alert('Your browser is outdated. This app cannot be run on your stack.');
      }
    }, 500);
  }
])
.controller('startCtrl', ['$scope',
  function ($scope) {
      $scope.whatever = 1;
  }
])
.controller('loginCtrl', ['$scope', '$location', '$mdSidenav',
  function ($scope, $location, $mdSidenav) {
      $scope.login = function () {
	// $resource to authenticate and also save userId and token for $resource usage
	// then afterwards redirect to /start
	$location.path('/start');	
      };
      $scope.signUp = function () {
	// do something to sign up the user, using $resource or something
      };
      $scope.toggleLeftSidenav = function () {
	$mdSidenav('left').toggle();
      };
      $scope.toggleRightSidenav = function () {
	$mdSidenav('right').toggle();
      };
  }
])
.controller('homeCtrl', ['$scope',
  function ($scope) {
      $scope.whatever = 1;
  }
])
.controller('centerInfoCtrl', ['$scope',
  function ($scope) {
      $scope.whatever = 1;
  }
])
.controller('directoryCtrl', ['$scope',
  function ($scope) {
      $scope.whatever = 1;
  }
])
.controller('qrCtrl', ['$scope',
  function ($scope) {
      $scope.whatever = 1;
  }
])
.controller('selectDefaultCtrl', ['$scope',
  function ($scope) {
      $scope.whatever = 1;
  }
])
.controller('transactionsCtrl', ['$scope',
  function ($scope) {
      $scope.whatever = 1;
  }
])
.controller('whatsHappeningCtrl', ['$scope',
  function ($scope) {
      $scope.whatever = 1;
  }
]);
