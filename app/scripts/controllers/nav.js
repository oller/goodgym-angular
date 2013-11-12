'use strict';

angular.module('angularGoodgymApp')
  .controller('NavCtrl', function ($scope) {
    $scope.nav = [
      {title: 'Home', slug: ''},
      {title: 'View Runs', slug: 'view'},
      {title: 'Manage Runs', slug: 'manage'},
      {title: 'View Team', slug: 'team'},
      {title: 'My Account', slug: 'account'}
    ];
  });
