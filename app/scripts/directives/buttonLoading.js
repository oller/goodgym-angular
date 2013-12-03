'use strict';

// Watch for $scope.loading and set the button loading state accordingly
angular.module('angularGoodgymApp')
  .directive('buttonLoading', function() {
    return {
      restrict: 'A',
      terminal: true,
      link: function($scope, element, attrs) {
        $scope.$watch('loading', function() {
          var loadingIcon = '<span class="progress"></span>';
          if ($scope.loading === true) {
            element.addClass(attrs.buttonLoading)
            element.prepend(loadingIcon);
          } else {
            element.removeClass(attrs.buttonLoading)
            element.children().remove();
          }
        }, true);
      }
    };
  });
