'use strict';

/* Controllers */

var mallAppControllers = angular.module('mallAppControllers', [])
.controller('mainNavbar', ['$scope', '$window', '$location', '$mdSidenav', 'Standard',
  function ($scope, $window, $location, $mdSidenav, Standard) {
    $scope.back = Standard.back;
    $scope.show = $window.showNavbar;
    $scope.breadcrumb = $window.breadcrumb;
    $scope.$watch(function () { return $window.showNavbar; }, function () {
      // every time this global variable window.showNavbar changes, apply the changes to $scope.show to refresh to show/hide the navbar
      $scope.show = $window.showNavbar;
      $scope.breadcrumb = $window.breadcrumb;
    });
    $scope.toggleMainMenuSidenav = function () {
      $mdSidenav('main-menu').toggle();
    };
  }
])
.controller('splashscreenCtrl', ['$scope', '$window', '$location', '$timeout', 'Standard',
  function ($scope, $window, $location, $timeout, Standard) {
    Standard.showNavbar(false); // to ensure that the navbar is hidden
    $scope.splashRedirect = $timeout(function () {
      if ($window.localStorage) {
	var userId = $window.localStorage.getItem('userId'); // returns user's id
	var page = $window.localStorage.getItem('homepageSetting'); // returns a page in string format
	if (userId && page) {
	  if (page == 'whats-happening' || 'directory') {
	    $location.path(page);
	  } else {
	    $window.alert('Your home page is not set. Please set it again.');
	    $location.path('/start');
	  }
	} else {
	  $location.path('/login');
	}
      } else {
	$window.alert('Your browser is outdated. This app cannot be run on your stack.');
      }
    }, 500);
  }
])
.controller('startCtrl', ['$scope', '$location', '$window', 'Standard',
  function($scope, $location, $window, Standard) {
    Standard.showNavbar(false);
    $scope.startChoice = function(page) {
      if (page == 'whats-happening') {
	$window.localStorage.setItem('homepageSetting', 'whats-happening');
	$location.path('/whats-happening');
      } else
      if (page == 'directory') {
	$window.localStorage.setItem('homepageSetting', 'directory');
	$location.path('/directory');
      } else {
	$window.alert('Invalid page chosen.');
      }
    }
  }
])
.controller('loginCtrl', ['$scope', '$location', '$mdSidenav', 'Standard',
  function($scope, $location, $mdSidenav, Standard) {
    Standard.showNavbar(false);
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
.controller('centerInfoCtrl', ['$scope', 'Standard',
  function ($scope, Standard) {
    Standard.showNavbar(true);
    Standard.breadcrumbs('Center Info');
    $scope.whatever = 1;
  }
])
.controller('directoryCtrl', ['$scope', 'Standard',
  function ($scope, Standard) {
    Standard.showNavbar(true);
    Standard.breadcrumbs('Directory');
    $scope.whatever = 1;
  }
])
.controller('qrCtrl', ['$scope', 'Standard',
  function ($scope, Standard) {
    Standard.showNavbar(true);
    Standard.breadcrumbs('QR Code');
    $scope.whatever = 1;
  }
])
.controller('selectDefaultCtrl', ['$scope', 'Standard',
  function ($scope, Standard) {
    Standard.showNavbar(false);
    $scope.whatever = 1;
  }
])
.controller('transactionsCtrl', ['$scope', 'Standard',
  function ($scope, Standard) {
    Standard.showNavbar(true);
    Standard.breadcrumbs('Transactions');
    $scope.whatever = 1;
  }
])
.controller('whatsHappeningCtrl', ['$scope', '$window', '$sce', 'WhatsHappening', 'Standard',
  function ($scope, $window, $sce, WhatsHappening, Standard) {
    Standard.showNavbar(true);
    Standard.breadcrumbs('What\'s Happening?');
    WhatsHappening.get(function(response) { 
      $window.console.log(response.value);
      $scope.happenings = [];
      for (var i = 0; i < response.value.length; i++) {
	var html = $sce.trustAsHtml(response.value[i].Body);
	$scope.happenings.push(html);	
      }
    });
  }
]);
