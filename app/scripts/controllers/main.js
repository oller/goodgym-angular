'use strict';

angular.module('angularGoodgymApp')
  .controller('MainCtrl', function ($scope, AuthService) {
    $scope.text = {
        strapline: 'Some introductory sentence...'
      };

    $scope.token = AuthService.token;

  });
