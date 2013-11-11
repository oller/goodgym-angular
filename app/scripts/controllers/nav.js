'use strict';

angular.module('angularGoodgymApp')
  .controller('NavCtrl', function ($scope) {
    $scope.nav = [
      'Home',
      'Book a Run',
      'Leave a Run',
      'This',
      'That',
      'The Other'
    ];
  });
