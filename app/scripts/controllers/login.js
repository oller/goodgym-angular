'use strict';

angular.module('angularGoodgymApp')
  .controller('LoginCtrl', ['$rootScope', '$scope', '$location', '$window', 'AuthService',
    function($rootScope, $scope, $location, $window, AuthService) {

      // Set initial tab state
      $scope.join.active.tab = 'login';

      $scope.rememberme = true;
      $scope.login = function() {

        // Toggle loading state of button
        $scope.loading = true;

        AuthService.login(
          $scope.user,
          function(res) {
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
