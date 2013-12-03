'use strict';

angular.module('goodgymApp')
  .service('Run', ['$resource',
    function($resource) {
      // AngularJS will instantiate a singleton by calling "new" on this function
      return $resource('http://goodgym-api.herokuapp.com/api/v1/group_runs/:runId/:reg/:regId', {
        runId: '@runId',
        reg: '@reg',
        regId: '@regId'
      }, {
        query: {
          method: 'GET',
          isArray: false
        },
        register: {
          method: 'POST',
          params: {
            reg: 'registrations',
          }
        },
        deregister: {
          method: 'DELETE',
          params: {
            reg: 'registrations',
          }
        }
      });
    }
  ]);
