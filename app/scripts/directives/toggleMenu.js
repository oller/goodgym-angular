'use strict';

angular.module('angularGoodgymApp')
  .directive('toggleMenu', function() {
      // Set the defined class on the parent element on click.
      return {
          link: function($scope, iElm, iAttrs) {
              iElm.on('click', function(e) {
                  e.preventDefault;
                  iElm.parent().toggleClass(iAttrs.toggleMenu);
                });
            }
        };
    });