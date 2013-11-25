'use strict';

angular.module('angularGoodgymApp')
  .directive('buttonLoading', function() {
    return {
      // template: '<div></div>',
      restrict: 'A',
      terminal: true,
      link: function postLink(scope, element, attrs) {
        scope.$watch('loading', function() {
        //   return scope.loading;
        // }, function() {

          var loadingIcon = '<span class="progress"></span>';

          if (scope.loading == true) {
            element.prepend(loadingIcon);
          } else {
            element.children().remove();
          }

        }, true);

      }
    };
  });
