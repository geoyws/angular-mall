var mallAppAnimations = angular.module('mallAppAnimations', ['ngAnimate'])
.animation('main-navbar', function () {
  return {
    addClass: function (element, className, done) {
      if (className != 'active') {
	return;
      }

      element.css('opacity', 0);
      jQuery(element).animate({
	opacity: 1
      }, done);
      
      return function (isCancelled) {
	if (isCancelled) {
	  jQuery(element).stop();
	}
      };
    },
    removeClass: function (element, className, done) {
      if (className != 'active') {
	return;
      }

      element.css({
	position: 'absolute',
	top: 500,
	left: 0,
	display: 'block'
      });
      
      jQuery(element).animate({
	top: -500
      }, done);      

      return function (isCancelled) {
	if (isCancelled) {
	  jQuery(element).stop();
	}
      };
    }
  };
});

