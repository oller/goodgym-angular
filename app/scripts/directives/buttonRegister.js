'use strict';

angular.module('goodgymApp')
  .directive('buttonRegister', ['Run', 'toaster',
    function(Run, toaster) {
      return {
        restrict: 'A',
        link: function postLink(scope, element, attrs) {

          var registered = scope.run.signed_up;

          if (registered) {
            element.text('Leave run');
          } else {
            element.text('Join run');
          }

          function register() {
            scope.loading = true;
            Run.register({
              runId: attrs.buttonRegister
            }, function success() {
              scope.loading = false;
              scope.run.signed_up = true;
              toaster.pop('success', 'Registered!', 'You\'re registered on the run.  See you at date and time!');
            }, function error() {
              scope.loading = false;
              toaster.pop('error', 'Uh-oh', 'There was an error in trying to update your registration');
            });
          }

          function deregister() {
            scope.loading = true;
            Run.deregister({
              runId: attrs.buttonRegister,
              // regId: attrs  // Needs to be populated from the API
            }, function success() {
              scope.loading = false;
              scope.run.signed_up = false;
              toaster.pop('warning', 'Deregistered!', 'You\'re no longer attending this run!');
            }, function error() {
              scope.loading = false;
              toaster.pop('error', 'Uh-oh', 'There was an error in trying to update your registration');
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
