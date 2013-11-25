'use strict';

angular.module('angularGoodgymApp')
  .directive('toggleParent', function() {
      // Set the defined class on the parent element on click.
      return {
          link: function($scope, element, attrs) {
              element.on('click', function(e) {
                  e.preventDefault;
                  element.parent().toggleClass(attrs.toggleParent);
                });
            }
        };
    });