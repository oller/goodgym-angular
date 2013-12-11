'use strict';

angular.module('goodgymApp')
  .controller('MainCtrl', ['$rootScope', '$scope',
  	function($rootScope, $scope) {
    $scope.text = {
      strapline: 'Some introductory sentence...'
    };

  }]);
