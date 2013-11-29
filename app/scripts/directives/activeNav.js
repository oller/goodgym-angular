'use strict';

// Set active state of current page in nav menu, based out location.path (url)
angular.module('angularGoodgymApp')
  .directive('activeNav', ['$location',
    function($location) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          var path = attrs.href;
          var selectedClass = attrs.activeNav;
          scope.location = $location;
          scope.$watch('location.path()', function(newPath) {
            if (path === newPath) {
              element.addClass(selectedClass);
            } else {
              element.removeClass(selectedClass);
            }
          });
        }
      };
    }
  ]);
