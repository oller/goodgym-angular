'use strict';

angular.module('goodgymApp')
  .controller('TeamCtrl', ['$scope', 'AuthService',
    function($scope, AuthService) {
      $scope.title = 'My Team';
    }
  ]);
