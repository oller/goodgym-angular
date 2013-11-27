'use strict';

angular.module('angularGoodgymApp')
  .controller('NavCtrl', function ($scope) {
    $scope.nav = [
      {title: 'Home', slug: '', access: 'anon', icon: 'house'},
      {title: 'View Runs', slug: 'view', access: 'admin', icon: 'user'},
      {title: 'Manage Runs', slug: 'manage', access: 'user', icon: 'clipboard'},
      {title: 'View Team', slug: 'team', access: 'user', icon: 'users'},
      {title: 'My Account', slug: 'account', access: 'user', icon: 'cog'}
    ];
  });
