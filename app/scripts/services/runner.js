'use strict';

angular.module('goodgymApp')
  .service('Runner', ['$resource',
    function($resource) {
      // AngularJS will instantiate a singleton by calling "new" on this function
      return $resource('http://goodgym-api.herokuapp.com/api/v1/runners/:action:runnerId/:followAction', {
        action: '@action',
        runnerId: '@runnerId',
        followAction: '@followAction'
      }, {
        create: {
          method: 'POST',
          params: {
            action: 'create',
          }
        },
        follow: {
          method: 'POST',
          params: {
            followAction: 'follow',
          }
        },
        unfollow: {
          method: 'POST',
          params: {
            followAction: 'unfollow',
          }
        }
      });
    }
  ]);
