'use strict';

angular.module('goodgymApp')
  .service('Me', ['$resource',
    function($resource) {
      // AngularJS will instantiate a singleton by calling "new" on this function
      return $resource('http://goodgym-api.herokuapp.com/api/v1/me', {}, {
        query: {
          method: 'GET',
          isArray: false
        }
      });
    }
  ]);
