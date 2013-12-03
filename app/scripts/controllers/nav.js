'use strict';

angular.module('goodgymApp')
  .controller('NavCtrl', ['$rootScope', '$scope', '$location', 'AuthService',
    function($rootScope, $scope, $location, AuthService) {
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
        slug: 'view',
        access: 'public',
        icon: 'user'
      }, {
        title: 'Manage Runs',
        slug: 'manage',
        access: 'public',
        icon: 'clipboard'
      }, {
        title: 'View Team',
        slug: 'team',
        access: 'public',
        icon: 'users'
      }, {
        title: 'My Account',
        slug: 'account',
        access: 'public',
        icon: 'cog'
      }];

      $scope.logout = function() {
        AuthService.logout(function() {
          $location.path('/login');
        }, function() {
          $rootScope.error = 'Failed to logout';
        });
      };
    }
  ]);
