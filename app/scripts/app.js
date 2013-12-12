'use strict';

angular.module('goodgymApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  // 'ngAnimate',
  'ngRoute',
  // Third Party Modules
  'toaster',
  'LocalStorageModule'
])
  .config(['$routeProvider', '$locationProvider', '$httpProvider',
    function($routeProvider, $locationProvider, $httpProvider) {

      var access = routingConfig.accessLevels;

      // console.log('access details:');
      // console.log(access);

      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          access: access.public //user, anon, admin or public
        })
        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl',
          access: access.public
        })
        .when('/runs', {
          templateUrl: 'views/runList.html',
          controller: 'RunListCtrl',
          access: access.public
        })
        .when('/runs/:runId', {
          templateUrl: 'views/runDetail.html',
          controller: 'RunDetailCtrl',
          access: access.public
        })
        .when('/manage', {
          templateUrl: 'views/manage.html',
          controller: 'ManageCtrl',
          access: access.public
        })
        .when('/account', {
          templateUrl: 'views/account.html',
          controller: 'AccountCtrl',
          access: access.user
        })
        .when('/team', {
          templateUrl: 'views/team.html',
          controller: 'TeamCtrl',
          access: access.public
        })
        .when('/legal', {
          templateUrl: 'views/legal.html',
          access: access.public
        })
        .when('/policy', {
          templateUrl: 'views/policy.html',
          access: access.public
        })
        .when('/404', {
          templateUrl: 'views/404.html',
          access: access.public
        })
        .otherwise({
          redirectTo: '/404',
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
      AuthService.restoreSession();
      if (!AuthService.authorize(next.access)) {
        if (AuthService.isLoggedIn()) {
          $location.path('/');
        } else {
          $location.path('/login');
        }
      }
    });

  }
]);
