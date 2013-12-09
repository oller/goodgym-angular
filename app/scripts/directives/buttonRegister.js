'use strict';

angular.module('goodgymApp')
  .directive('buttonRegister', ['Run', 'toaster',
    function(Run, toaster) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {

          function register() {
            scope.loading = true;
            Run.register({
              runId: attrs.runId,
            }, function success(data) {
              scope.loading = false;
              scope.run.signed_up = true;
              scope.run.registration_id = data.registration.id;
              toaster.pop('success', 'Registered!', 'You\'re registered on the run.  See you at date and time!');
            }, function error() {
              scope.loading = false;
              toaster.pop('error', 'Uh-oh', 'There was an error in trying to update your registration');
            });
          }

          function deregister() {
            scope.loading = true;
            Run.deregister({
              runId: attrs.runId,
              regId: attrs.regId
            }, function success() {
              scope.loading = false;
              scope.run.signed_up = false;
              scope.run.registration_id = '';
              toaster.pop('warning', 'Deregistered!', 'You\'re no longer attending this run!');
            }, function error() {
              scope.loading = false;
              toaster.pop('error', 'Uh-oh', 'There was an error in trying to update your registration');
            });
          }


          scope.$watch('run', function() {

            if (scope.run.signed_up) {
              element.html('Leave run');
              element.removeClass('p0')
            } else {
              element.html('Join run');
              element.addClass('p0');
            }

          }, true);


          element.on('click', function() {
            if (scope.run.signed_up) {
              deregister();
            } else {
              register();
            }

          });



        }
      };
    }
  ]);
