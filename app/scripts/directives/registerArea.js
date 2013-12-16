'use strict';

angular.module('goodgymApp')
  .directive('registerArea', ['Area', 'toaster',
    function(Area, toaster) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {

          function subscribe() {
            scope.loading = true;
            Area.subscribe({
              areaId: attrs.areaId,
            }, function success() {
              scope.loading = false;
              scope.area.signed_up = true;
              toaster.pop('success', 'Subscribed!', 'You\'re now subscribed to this area, we\'ll keep you updated with activity in this area');
            }, function error() {
              scope.loading = false;
              toaster.pop('error', 'Uh-oh', 'There was an error in trying to update your area preferences');
            });
          }

          function unsubscribe() {
            scope.loading = true;
            Area.unsubscribe({
              areaId: attrs.areaId,
            }, function success() {
              scope.loading = false;
              scope.area.signed_up = false;
              scope.area.registration_id = '';
              toaster.pop('warning', 'Unsubscribed!', 'You\'re no longer subscribed to this area');
            }, function error() {
              scope.loading = false;
              toaster.pop('error', 'Uh-oh', 'There was an error in trying to update your area preferences');
            });
          }

          scope.$watch('area', function() {

            if (scope.area.signed_up) {
              element.html('Leave area').removeClass('p0');
            } else {
              element.html('Join area').addClass('p0');
            }

          }, true);

          element.on('click', function() {
            if (scope.area.signed_up) {
              unsubscribe();
            } else {
              subscribe();
            }

          });

        }
      };
    }
  ]);
