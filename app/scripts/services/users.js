'use strict';

angular.module('angularGoodgymApp')
  .factory('UsersService', function($http) {
    return {
      getAll: function(success, error) {
        $http.get('/users').success(success).error(error);
      }
    };
  });
