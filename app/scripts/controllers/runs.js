'use strict';

angular.module('goodgymApp')
  .controller('RunsCtrl', function ($scope, Run) {
    $scope.title = 'Group Runs';

    // Get All runs
    $scope.runs = Run.query();

  });
