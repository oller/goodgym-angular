'use strict';

angular.module('goodgymApp')
  .controller('AreaCtrl', ['$scope', 'Area', 'toaster',
    function($scope, Area, toaster) {

      // Set initial tab to be Active
      $scope.tab = {
        current: 'active'
      };

      var activeAreas = Area.getActive('', function success() {
        if (activeAreas.areas.length !== 0) {
          $scope.activeAreas = activeAreas.areas;
          console.log('active data exists');
        } else {
          $scope.noDataPane = {
            activeAreas: true
          };
          console.log('active data NOT exists');
        }
      }, function error() {
        toaster.pop('error', 'Uh-oh', 'There was an error in trying to retrieve the list of active areas');
        $scope.noDataPane = {
          activeAreas: true
        };
      });

      var proposedAreas = Area.getProposed('', function success() {
        if (proposedAreas.areas.length !== 0) {
          $scope.proposedAreas = proposedAreas.areas;
          console.log('proposed data exists');
        } else {
          console.log('proposed data NOT exists');
          $scope.noDataPane = {
            proposedAreas: true
          };
        }
      }, function error() {
        toaster.pop('error', 'Uh-oh', 'There was an error in trying to retrieve the list of proposed areas');
        $scope.noDataPane = {
          proposedAreas: true
        };
      });

    }
  ]);
