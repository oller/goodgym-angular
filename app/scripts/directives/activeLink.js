'use strict';

angular.module('angularGoodgymApp')
  .directive('activeLink', ['$location', function(location) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, controller) {
            var selectedClass = attrs.activeLink;
            var path = attrs.href;
            path = path.substring(1); //hack because path does bot return including hashbang
            scope.location = location;
            scope.$watch('location.path()', function(newPath) {
                if (path === newPath) {
                    element.addClass(selectedClass);
                } else {
                    element.removeClass(selectedClass);
                }
            });
        }

    };
}]);