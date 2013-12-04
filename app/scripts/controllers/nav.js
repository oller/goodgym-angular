'use strict';

angular.module('goodgymApp')
  .controller('NavCtrl', ['$rootScope', '$scope', '$location', 'AuthService', 'toaster',
    function($rootScope, $scope, $location, AuthService, toaster) {
      $scope.user = AuthService.user;
      $scope.userRoles = AuthService.userRoles;
      $scope.accessLevels = AuthService.accessLevels;

      $scope.nav = [{
        title: 'Home',
        slug: '',
        access: 'public', //anon, public, user or admin
        icon: 'house'
      }, {
        title: 'View Runs',
        slug: 'runs',
        access: 'public',
        icon: 'users'
      }, {
        title: 'Manage Runs',
        slug: 'manage',
        access: 'user',
        icon: 'clipboard'
      }, {
        title: 'View Team',
        slug: 'team',
        access: 'user',
        icon: 'users'
      }, {
        title: 'My Account',
        slug: 'account',
        access: 'user',
        icon: 'cog'
      }];

      $scope.logout = function() {
        AuthService.logout(function() {
          $location.path('/login');
        }, function() {
          // $rootScope.error = 'Failed to logout';
          toaster.pop('error', 'Failed to logout', 'There was an error when trying to log you out.');
        });
      };
    }
  ]);
