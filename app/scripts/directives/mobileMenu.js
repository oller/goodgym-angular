'use strict';

angular.module('angularGoodgymApp')
  .directive('mobileMenu', function() {
      // Runs during compile
      return {
          link: function($scope, iElm) {
              iElm.on('click', function(e) {
                  e.preventDefault;
                  iElm.parent().toggleClass('active');
                });
            }
        };
    });