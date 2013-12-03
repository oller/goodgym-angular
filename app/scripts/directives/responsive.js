'use strict';

angular.module('goodgymApp')
  .directive('responsive', function($rootScope, $window) {
    // Runs during compile
    return {
      link: function($scope, element) {
        element.on('click', function(e) {
          e.preventDefault;
          // Only fire if in tablet/mobile responsive view
          if ($window.innerWidth <= 1024) {
            $scope.$apply(function() {
              $rootScope.showResponsiveMenu = !$rootScope.showResponsiveMenu;
            });
          }
        });
      }
    };
  });
