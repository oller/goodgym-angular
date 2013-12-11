'use strict';

angular.module('goodgymApp')
  .directive('ngShowIfPath', ['$location',
    function($location) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {

          // Show the element when the path matches
          scope.location = $location;
          scope.$watch('location.path()', function(newPath) {
            if (newPath == attrs.ngShowIfPath) {
              element.removeClass('hide');
            } else {
              element.addClass('hide');
            }
          });

        }
      };
    }
  ]);
