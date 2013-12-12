'use strict';

angular.module('goodgymApp')
  .controller('RunsCtrl', ['$scope', 'Run', 'toaster',
    function($scope, Run, toaster) {
      $scope.title = 'Group Runs';

      // Initial visibility of Create Run Form
      $scope.toggleCreate = false;

      var runs = Run.query('', function success() {
        if (runs.group_runs) {
          $scope.runs = runs.group_runs;
        } else {
          $scope.noDataPane = true;
        }
      }, function error() {
        toaster.pop('error', 'Uh-oh', 'There was an error in trying to retrieve the list of runs');
        $scope.noDataPane = true;
      });

    }
  ]);
