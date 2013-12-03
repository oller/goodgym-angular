'use strict';

angular.module('goodgymApp')
  .controller('LoginCtrl', ['$rootScope', '$scope', '$location', '$window', 'AuthService',
    function($rootScope, $scope, $location, $window, AuthService) {

      $scope.rememberme = true;
      $scope.login = function() {

        // Toggle loading state of button
        $scope.loading = true;

        console.log('starting login process');

        AuthService.login(
          $scope.user,
          function() {
            console.log('login success callback?');
            $scope.loading = false;
            $location.path('/');
          },
          function(err) {
            console.log('login error callback?');
            $scope.loading = false;
          });
      };

      $scope.loginOauth = function(provider) {
        $window.location.href = '/auth/' + provider;
      };
    }
  ]);
