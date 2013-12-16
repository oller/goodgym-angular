'use strict';

// Watch for $scope.loading and set the button loading state accordingly
angular.module('goodgymApp')
  .directive('buttonLoading', function() {
    return {
      restrict: 'A',
      terminal: true,
      link: function($scope, element, attrs) {
        $scope.$watch('loading', function() {
          var loadingIconClass = 'progress';
          var loadingIcon = '<span class="'+loadingIconClass+'"></span>';
          if ($scope.loading === true) {
            element.addClass(attrs.buttonLoading);
            element.prepend(loadingIcon);
          } else {
            element.removeClass(attrs.buttonLoading);
            element.children().remove(loadingIconClass);
          }
        }, true);
      }
    };
  });
