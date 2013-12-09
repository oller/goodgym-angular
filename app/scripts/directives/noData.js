'use strict';

angular.module('goodgymApp')
  .directive('noData', function() {
    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      templateUrl: 'views/partials/noData.html',
      link: function(scope, element, attrs) {

        scope.noData = {
          icon: attrs.icon,
          title: attrs.title,
          desc: attrs.desc
        };

      }
    };
  });
