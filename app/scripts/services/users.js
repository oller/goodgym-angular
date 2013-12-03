'use strict';

angular.module('goodgymApp')
  .factory('UsersService', function($http) {
    return {
      getAll: function(success, error) {
        $http.get('/users').success(success).error(error);
      }
    };
  });
