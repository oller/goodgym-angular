'use strict';

angular.module('goodgymApp')
  .service('Area', ['$resource',
    function($resource) {
      // AngularJS will instantiate a singleton by calling "new" on this function
      return $resource('http://goodgym-api.herokuapp.com/api/v1/areas/:action:areaId/:subcribeAction', {
        action: '@action',
        areaId: '@areaId',
        subcribeAction: '@subcribeAction'
      }, {
        getActive: {
          method: 'GET',
          params: {
            action: 'active',
          }
        },
        getProposed: {
          method: 'GET',
          params: {
            action: 'proposed',
          }
        },
        subscribe: {
          method: 'POST',
          params: {
            subcribeAction: 'subscribe',
          }
        },
        unsubscribe: {
          method: 'POST',
          params: {
            subcribeAction: 'unsubscribe',
          }
        }
      });
    }
  ]);
