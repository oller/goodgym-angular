'use strict';

angular.module('goodgymApp')
  .controller('RunDetailCtrl', ['$scope', '$routeParams', 'Run',
    function($scope, $routeParams, Run) {
      var run = Run.get({
        runId: $routeParams.runId
      }, function(run) {
        // $scope.mainImageUrl = phone.images[0];
        $scope.run = run.group_run;
      });
    }
  ]);
