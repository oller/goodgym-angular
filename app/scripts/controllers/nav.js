'use strict';

angular.module('angularGoodgymApp')
  .controller('NavCtrl', function ($scope) {
    $scope.nav = [
      {title: 'Home', slug: '', icon: 'house'},
      {title: 'View Runs', slug: 'view', icon: 'user'},
      {title: 'Manage Runs', slug: 'manage', icon: 'clipboard'},
      {title: 'View Team', slug: 'team', icon: 'users'},
      {title: 'My Account', slug: 'account', icon: 'cog'}
    ];
  });