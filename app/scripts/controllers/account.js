'use strict';

angular.module('goodgymApp')
  .controller('AccountCtrl', ['$scope', 'Me',
    function($scope, Me) {
      $scope.title = 'My Account';

      var me = Me.query('',
        function success() {
          $scope.me = me.runner;
        }, function error() {
          toaster.pop('error', 'Uh-oh', 'There was an error retrieving your user details');
        });
    }
  ]);
