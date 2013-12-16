'use strict';

angular.module('goodgymApp')
  .controller('AccountCtrl', ['$scope', 'Me', 'toaster',
    function($scope, Me, toaster) {
      $scope.title = 'My Account';

      var me = Me.query('',
        function success() {
          $scope.me = me.runner;
        }, function error() {
          toaster.pop('error', 'Uh-oh', 'There was an error retrieving your user details');
        });
    }
  ]);
