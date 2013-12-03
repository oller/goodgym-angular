'use strict';

// Toggle the narrow/slim navigation side panel
angular.module('angularGoodgymApp')
  .directive('narrowNav', function($rootScope) {
    // Runs during compile
    return {
      link: function($scope, element) {
        element.on('click', function(e) {
          e.preventDefault;
          $scope.$apply(function() {
            $rootScope.showNarrowNav = !$rootScope.showNarrowNav;
          });

        });
      }
    };
  });
