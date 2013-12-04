'use strict';

angular.module('goodgymApp')
  .controller('SignupCtrl', ['$rootScope', '$scope', '$location', 'AuthService', 'toaster',
    function($rootScope, $scope, $location, AuthService, toaster) {

      $scope.role = AuthService.userRoles.user;
      $scope.userRoles = AuthService.userRoles;

      $scope.signUp = function() {

        // Toggle loading state of button
        $scope.loading = true;

        AuthService.register(
          $scope.data,
          function() {
            $scope.loading = false;
            $location.path('/');
          },
          function(err) {
            $rootScope.error = err;
          });
      };
    }
  ]);
