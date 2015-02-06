'use strict';

/* Controllers */

var mallAppControllers = angular.module('mallAppControllers', [])
.controller('splashscreenCtrl', ['$scope', '$window', '$location', '$timeout',
  function($scope, $window, $location, $timeout) {
    $scope.splashRedirect = $timeout(function() {
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
.controller('startCtrl', ['$scope', '$location', '$window',
  function($scope, $location, $window) {
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
.controller('loginCtrl', ['$scope', '$location', '$mdSidenav',
  function($scope, $location, $mdSidenav) {
    $scope.login = function() {
      // $resource to authenticate and also save userId and token for $resource usage
      // then afterwards redirect to /start
      $location.path('/start');	
    };
    $scope.signUp = function() {
      // do something to sign up the user, using $resource or something
    };
    $scope.toggleLeftSidenav = function() {
      $mdSidenav('left').toggle();
    };
    $scope.toggleRightSidenav = function() {
      $mdSidenav('right').toggle();
    };
  }
])
.controller('centerInfoCtrl', ['$scope',
  function($scope) {
    $scope.whatever = 1;
  }
])
.controller('directoryCtrl', ['$scope',
  function($scope) {
    $scope.whatever = 1;
  }
])
.controller('qrCtrl', ['$scope',
  function($scope) {
    $scope.whatever = 1;
  }
])
.controller('selectDefaultCtrl', ['$scope',
  function($scope) {
    $scope.whatever = 1;
  }
])
.controller('transactionsCtrl', ['$scope',
  function($scope) {
    $scope.whatever = 1;
  }
])
.controller('whatsHappeningCtrl', ['$scope', '$window', 'WhatsHappening', '$sce',
  function($scope, $window, WhatsHappening, $sce) {
    //whatsHappening = new WhatsHappening(); // don't even need to instantiate it. The stackoverflow people lied.
    $scope.toggleMainMenuSidenav = function() {
      $mdSidenav('main-menu').toggle();
    };
    WhatsHappening.get(function(response) { 
      $window.console.log(response.value);
      $scope.happenings = [];
      for (var i = 0; i < response.value.length; i++) {
	var html = $sce.trustAsHtml(response.value[i].Body);
	$scope.happenings.push(html);	
      }
    });
    /*
    $scope.log = function() {
      $window.console.log($scope.getHappenings());
    };
    $scope.logValue = function() {
      $window.console.log($scope.getHappenings().value); // this will get you nothing as it must wait for the callback, but how come the first one can?
    };
    */
    /*
    $scope.renderHappenings = function() {
      $window.console.log(WhatsHappening.get(function(data) {
	//$scope.happenings = data;
	return data;
      }));
      //$scope.happenings = WhatsHappening.get(function(data) { $scope.data = data; });
      //var getHappenings = WhatsHappening.get();
      $window.console.log(getHappenings);
      getHappenings.$promise.then(function(happenings) {
	$scope.happenings = happenings;
	$window.console.log(happenings);
      });
    };
    */
  }
]);
