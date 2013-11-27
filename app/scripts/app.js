'use strict';

angular.module('angularGoodgymApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(['$routeProvider', '$locationProvider', '$httpProvider',
    function($routeProvider, $locationProvider, $httpProvider) {

      var access = routingConfig.accessLevels;

      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          access: access.user
        })
        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl',
          access: access.anon
        })
        .when('/view', {
          templateUrl: 'views/view.html',
          controller: 'ViewCtrl',
          access: access.user
        })
        .when('/manage', {
          templateUrl: 'views/manage.html',
          controller: 'ManageCtrl',
          access: access.anon
        })
        .when('/account', {
          templateUrl: 'views/account.html',
          controller: 'AccountCtrl',
          access: access.public
        })
        .when('/team', {
          templateUrl: 'views/team.html',
          controller: 'TeamCtrl',
          access: access.user
        })
        .otherwise({
          redirectTo: '/',
        });

      $locationProvider.html5Mode(true);

      var interceptor = ['$location', '$q',
        function($location, $q) {
          function success(response) {
            return response;
          }

          function error(response) {
            if (response.status === 401) {
              $location.path('/login');
              return $q.reject(response);
            } else {
              return $q.reject(response);
            }
          }

          return function(promise) {
            return promise.then(success, error);
          };
        }
      ];

      $httpProvider.responseInterceptors.push(interceptor);

    }
  ])

.run(['$rootScope', '$location', 'AuthService',
  function($rootScope, $location, AuthService) {

    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      $rootScope.error = null;
      if (!AuthService.authorize(next.access)) {
        if (AuthService.isLoggedIn()) $location.path('/');
        else $location.path('/login');
      }
    });

  }
]);

// .run( function($rootScope, $location, NotificationService) {
//     // register listener to watch route changes
//     $rootScope.$on( "$routeChangeStart", function() {
//       NotificationService.destroyFeedback();
//     });
//  });
