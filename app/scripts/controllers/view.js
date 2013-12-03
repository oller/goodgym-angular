'use strict';

angular.module('angularGoodgymApp')
  .controller('ViewCtrl', function ($scope, Run) {
    $scope.title = 'My Runs';

    // Get All runs
    $scope.runs = Run.query();

  });
