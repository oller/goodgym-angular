'use strict';

angular.module('goodgymApp')
  .controller('AreaCtrl', ['$scope', 'Area', 'toaster',
    function($scope, Area, toaster) {

      var activeAreas = Area.getActive('', function success() {
        if (activeAreas.areas.length !== 0) {
          $scope.activeAreas = activeAreas.areas;
          console.log('active data exists');
        } else {
          $scope.noDataPane = true;
          console.log('active data NOT exists');
        }
      }, function error() {
        toaster.pop('error', 'Uh-oh', 'There was an error in trying to retrieve the list of active areas');
        $scope.noDataPane = true;
      });

      var proposedAreas = Area.getProposed('', function success() {
        if (proposedAreas.areas.length !== 0) {
          $scope.proposedAreas = proposedAreas.areas;
          console.log('proposed data exists');
        } else {
          console.log('proposed data NOT exists');
          $scope.noDataPane = true;
        }
      }, function error() {
        toaster.pop('error', 'Uh-oh', 'There was an error in trying to retrieve the list of proposed areas');
        $scope.noDataPane = true;
      });

      // var areas = Area.getActive('', function success() {
      //   if (areas.areas) {
      //     $scope.areas.active = areas.areas;
      //   } else {
      //     $scope.noDataPane = true;
      //   }
      // }, function error() {
      //   toaster.pop('error', 'Uh-oh', 'There was an error in trying to retrieve the list of areas');
      //   $scope.noDataPane = true;
      // });

    }
  ]);
