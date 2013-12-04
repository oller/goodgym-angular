'use strict';

angular.module('goodgymApp')
  .directive('buttonRegister', ['Run',
    function(Run) {
      return {
        restrict: 'A',
        link: function postLink(scope, element, attrs) {

          var registered = scope.run.signed_up;

          if (registered) {
            element.text('Leave the run');
          } else {
            element.text('Join the run');
          }

          function register() {
            scope.loading = true;
            Run.register({
              runId: attrs.buttonRegister
            }, function(run) {
              scope.loading = false;
              scope.run.signed_up = true;
            });
          }

          function deregister() {
            scope.loading = true;
            Run.deregister({
              runId: attrs.buttonRegister
            }, function(run) {
              scope.loading = false;
              scope.run.signed_up = false;
            });
          }

          element.on('click', function() {
            if (registered) {
              deregister();
            } else {
              register();
            }
          });
        }
      };
    }
  ]);
