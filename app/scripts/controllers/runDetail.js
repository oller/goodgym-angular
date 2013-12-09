'use strict';

angular.module('goodgymApp')
  .controller('RunDetailCtrl', ['$scope', '$routeParams', 'Run', 'toaster',
    function($scope, $routeParams, Run, toaster) {
      var run = Run.get({
        runId: $routeParams.runId
      }, function success() {
        $scope.run = run.group_run;
      }, function error() {
        toaster.pop('error', 'Uh-oh', 'There was an error in trying to retrieve the run details');
      });
    }
  ]);
