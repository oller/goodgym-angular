'use strict';

// Set the defined class on the parent element on click.
angular.module('goodgymApp')
  .directive('toggleParent', function() {
    return {
      link: function($scope, element, attrs) {
        element.on('click', function(e) {
          e.preventDefault;
          element.parent().toggleClass(attrs.toggleParent);
        });
      }
    };
  });
