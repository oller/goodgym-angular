'use strict';

angular.module('goodgymApp')
  .controller('ViewCtrl', function ($scope, Run) {
    $scope.title = 'My Runs';

    // Get All runs
    $scope.runs = Run.query();

  });
