'use strict';

angular.module('angularGoodgymApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/view', {
        templateUrl: 'views/view.html',
        controller: 'ViewCtrl'
      })
      .when('/manage', {
        templateUrl: 'views/manage.html',
        controller: 'ManageCtrl'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

//   .config(['$httpProvider', function($httpProvider) {
//         $httpProvider.defaults.useXDomain = true;
//         delete $httpProvider.defaults.headers.common['X-Requested-With'];
//       }
// ]);

  // .config(function($sceDelegateProvider) {
  // $sceDelegateProvider.resourceUrlWhitelist([
  //   // Allow same origin resource loads.
  //   'self',
  //   // Allow loading from our assets domain.  Notice the difference between * and **.
  //   'http://goodgym-api.herokuapp.com/**']);
  // });