'use strict';

angular.module('goodgymApp')
  .controller('RunsCtrl', ['$scope', 'Run',
    function($scope, Run) {
      $scope.title = 'Group Runs';

      // Get All runs
      $scope.runs = Run.query();

    }
  ]);
