'use strict';

angular.module('goodgymApp')
  .controller('RunDetailCtrl', ['$scope', '$routeParams', 'Run',
    function($scope, $routeParams, Run) {
      var run = Run.get({
        runId: $routeParams.runId
      }, function(run) {
        $scope.run = run.group_run;
      });
    }
  ]);
